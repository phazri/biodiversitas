<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContributionResource\Pages;
use App\Models\Citation;
use App\Models\Contribution;
use Filament\Actions\Action;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ContributionResource extends Resource
{
    protected static ?string $model = Contribution::class;

    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-inbox-arrow-down';

    protected static ?string $navigationLabel = 'Verifikasi Kontribusi';

    protected static ?string $modelLabel = 'Kontribusi';

    public static function canCreate(): bool
    {
        return false;
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user.name')->label('Kontributor')->searchable(),
                TextColumn::make('species.accepted_name')->label('Spesies')->limit(28)->extraAttributes(['style' => 'font-style: italic;']),
                TextColumn::make('type')->label('Jenis')->badge()
                    ->formatStateUsing(fn (string $state) => $state === 'citation' ? 'Jurnal' : 'Deskripsi')
                    ->color(fn (string $state) => $state === 'citation' ? 'info' : 'success'),
                TextColumn::make('citation_year')->label('Tahun')->badge()->color('gray'),

               
                TextColumn::make('conflict_notice')
                    ->label('Perhatian')
                    ->state(function (Contribution $record): ?string {
                        if ($record->type !== 'citation' || $record->status !== 'pending') {
                            return null;
                        }
                        $siblings = $record->pendingSiblingsCount();
                        if ($siblings > 0) {
                            return $siblings . ' jurnal lain antre di spesies ini';
                        }
                        if ($record->species?->citation) {
                            return 'Spesies sudah punya sitasi aktif';
                        }
                        return null;
                    })
                    ->badge()
                    ->color('warning')
                    ->placeholder('—'),

                TextColumn::make('status')->label('Status')->badge()
                    ->color(fn (string $state) => match ($state) {
                        'pending' => 'warning',
                        'approved' => 'success',
                        default => 'danger',
                    }),
                TextColumn::make('created_at')->label('Masuk')->since(),
            ])
            ->defaultSort('created_at', 'desc')
            ->actions([
                Action::make('approve')
                    ->label('Setujui & Terapkan')
                    ->icon('heroicon-o-check-circle')
                    ->color('success')
                    ->visible(fn (Contribution $record) => $record->status === 'pending')
                    ->requiresConfirmation()
                    ->modalHeading('Setujui dan terapkan kontribusi ini?')
                    ->modalDescription(fn (Contribution $record) => self::approveWarning($record))
                    ->action(function (Contribution $record) {
                        if ($record->type === 'description' && $record->content) {
                            $record->species->update(['description_simple' => $record->content]);
                        }

                        if ($record->type === 'citation') {
                            $authors = $record->citation_authors ?: 'Kontributor Publik';
                            $year    = $record->citation_year ?: (string) date('Y');
                            $title   = $record->citation_title ?: 'Referensi Kontribusi Publik';
                            $source  = $record->citation_source ?: 'Kontribusi Publik Biodiversitas ID';

                            $payload = [
                                'title'              => $title,
                                'authors'            => $authors,
                                'year'               => $year,
                                'source_type'        => 'Kontribusi Publik',
                                'source'             => $source,
                                'doi'                => $record->citation_doi,
                                'source_url'         => $record->citation_doi ? 'https://doi.org/' . $record->citation_doi : null,
                                'apa_formatted_text' => "{$authors} ({$year}). {$title}. {$source}.",
                            ];

                            $columns = \Illuminate\Support\Facades\Schema::getColumnListing('citations');
                            $payload = array_intersect_key($payload, array_flip($columns));

                            $citation = Citation::forceCreate($payload);
                            $record->species->update(['citation_id' => $citation->id]);
                        }

                        $record->update(['status' => 'approved']);
                        Notification::make()->title('Kontribusi disetujui & diterapkan')->success()->send();
                    }),

                Action::make('reject')
                    ->label('Tolak')
                    ->icon('heroicon-o-x-circle')
                    ->color('danger')
                    ->visible(fn (Contribution $record) => $record->status === 'pending')
                    ->requiresConfirmation()
                    ->modalHeading('Tolak kontribusi ini?')
                    ->action(function (Contribution $record) {
                        $record->update(['status' => 'rejected', 'review_note' => 'Ditolak admin']);
                        Notification::make()->title('Kontribusi ditolak')->danger()->send();
                    }),

                // ↩️ TARIK KEMBALI PERSETUJUAN YANG SUDAH TAYANG
                Action::make('revoke')
                    ->label('Tarik Kembali')
                    ->icon('heroicon-o-arrow-uturn-left')
                    ->color('gray')
                    ->visible(fn (Contribution $record) => $record->status === 'approved')
                    ->requiresConfirmation()
                    ->modalHeading('Tarik kembali persetujuan ini?')
                    ->modalDescription('Jurnal: sitasi dilepas dari spesies (lalu pilih jurnal lain via Edit Species). Deskripsi: sunting manual via Edit Species.')
                    ->action(function (Contribution $record) {
                        if ($record->type === 'citation') {
                            $current = $record->species?->citation;
                            if ($current && $current->title === $record->citation_title) {
                                $record->species->update(['citation_id' => null]);
                            }
                        }

                        $record->update(['status' => 'rejected', 'review_note' => 'Ditarik kembali oleh admin']);
                        Notification::make()->title('Persetujuan ditarik kembali')->warning()->send();
                    }),
            ]);
    }

    // ⚠️ Pesan peringatan dinamis di modal konfirmasi approve
    protected static function approveWarning(Contribution $record): string
    {
        if ($record->type === 'citation') {
            $warnings = [];
            $siblings = $record->pendingSiblingsCount();
            $current  = $record->species?->citation;

            if ($siblings > 0) {
                $warnings[] = "Ada {$siblings} jurnal LAIN yang juga menunggu untuk spesies ini — pilih yang paling relevan/mutakhir.";
            }
            if ($current) {
                $warnings[] = "Spesies sudah punya sitasi aktif: \"{$current->title} ({$current->year})\" — menyetujui ini akan MENGGANTINYA.";
            }

            if ($warnings) {
                return implode(' ', $warnings);
            }
        }

        return 'Data akan langsung diterapkan ke halaman spesies publik.';
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContributions::route('/'),
        ];
    }
}