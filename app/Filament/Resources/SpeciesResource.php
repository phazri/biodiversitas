<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SpeciesResource\Pages;
use App\Models\Species;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Actions\Action; 
use Filament\Actions\EditAction; 
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Notifications\Notification;
use App\Http\Controllers\GbifService;

class SpeciesResource extends Resource
{
    protected static ?string $model = Species::class;

    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Species';
    protected static ?int $navigationSort = 7;

public static function form(Schema $schema): Schema
{
    return $schema
        ->components([
            Select::make('genus_id')
                ->relationship('genus', 'name')
                ->label('Genus')
                ->required()
                ->searchable()
                ->preload()
                ->columnSpan(2),

            TextInput::make('accepted_name')
                ->label('Nama Ilmiah')
                ->required()
                ->maxLength(255)
                ->columnSpan(2)
                ->suffixAction(
                    Action::make('fetch_gbif')
                        ->icon('heroicon-o-cloud-arrow-down')
                        ->tooltip('Klik untuk ambil data dari GBIF')
                        ->color('primary')
                        ->action(function ($set, $state) {
                            $cleanName = trim($state);
                            
                            if (empty($cleanName)) {
                                Notification::make()
                                    ->title('Masukkan nama ilmiah terlebih dahulu')
                                    ->warning()
                                    ->send();
                                return;
                            }
                            
                            $gbif = app(GbifService::class);
                            $result = $gbif->searchAndCreateTaxonomy($cleanName);
                            
                            if ($result['success']) {
                                $set('accepted_name', $result['data']['accepted_name']);
                                
                                if (!empty($result['data']['common_name'])) {
                                    $set('common_name', $result['data']['common_name']);
                                }
                                
                                if (!empty($result['data']['genus_id'])) {
                                    $set('genus_id', $result['data']['genus_id']);
                                }
                                
                                Notification::make()
                                    ->title('✅ Data berhasil diambil dari GBIF!')
                                    ->success()
                                    ->send();
                            } else {
                                Notification::make()
                                    ->title('❌ ' . ($result['message'] ?? 'Gagal mengambil data'))
                                    ->danger()
                                    ->send();
                            }
                        })
                ),

            TextInput::make('common_name')
                ->label('Nama Umum')
                ->maxLength(255)
                ->columnSpan(2),

            Textarea::make('description_simple')
                ->label('Deskripsi')
                ->rows(3)
                ->columnSpan(2),

            TextInput::make('habitat')
                ->label('Habitat')
                ->maxLength(255)
                ->columnSpan(1),

            Select::make('conservation_status')
                ->label('Status Konservasi (IUCN)')
                ->options([
                    'LC' => 'Least Concern (LC)',
                    'NT' => 'Near Threatened (NT)',
                    'VU' => 'Vulnerable (VU)',
                    'EN' => 'Endangered (EN)',
                    'CR' => 'Critically Endangered (CR)',
                    'EX' => 'Extinct (EX)',
                ])
                ->required()
                ->columnSpan(1),

            Toggle::make('is_endemic')
                ->label('Endemik Indonesia')
                ->default(false)
                ->columnSpan(2),

            //  UPLOAD FOTO (REPEATER) - TAMBAHKAN DI SINI
            \Filament\Forms\Components\Repeater::make('media')
                ->relationship()
                ->label('Foto Spesies')
                ->schema([
                    \Filament\Forms\Components\FileUpload::make('image_url')
                        ->label('Upload Foto')
                        ->image()
                        ->directory('species')
                        ->visibility('public')
                        ->imageResizeMode('cover')
                        ->imageCropAspectRatio('16:9')
                        ->required()
                        ->columnSpanFull(),
                    
                    \Filament\Forms\Components\TextInput::make('caption')
                        ->label('Keterangan/Caption')
                        ->placeholder('Contoh: Gajah Sumatera di habitat aslinya')
                        ->maxLength(255)
                        ->columnSpanFull(),
                    
                    \Filament\Forms\Components\Select::make('life_stage')
                        ->label('Tahap Kehidupan')
                        ->options([
                            'adult' => 'Dewasa (Adult)',
                            'juvenile' => 'Remaja (Juvenile)',
                            'infant' => 'Bayi (Infant)',
                            'larval' => 'Larva',
                            'egg' => 'Telur (Egg)',
                        ])
                        ->default('adult'),
                ])
                ->columns(1)
                ->collapsible()
                ->itemLabel('Foto Spesies')
                ->minItems(1)
                ->maxItems(10)
                ->columnSpan(2)
                ->helperText('Upload minimal 1 foto, maksimal 10 foto untuk spesies ini'),
        ]);
}

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('accepted_name')
                    ->label('Nama Ilmiah')
                    ->searchable()
                    ->sortable(),
                    
                TextColumn::make('common_name')
                    ->label('Nama Umum')
                    ->searchable(),
                    
                BadgeColumn::make('conservation_status')
                    ->label('Status')
                    ->colors([
                        'danger' => 'CR',
                        'warning' => 'EN',
                        'gray' => 'VU',
                    ]),
                    
                IconColumn::make('is_endemic')
                    ->label('Endemik')
                    ->boolean(),
            ])
            ->filters([])
            ->actions([
                EditAction::make(), // Sekarang menggunakan namespace Filament\Actions\EditAction
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSpecies::route('/'),
            'create' => Pages\CreateSpecies::route('/create'),
            'edit' => Pages\EditSpecies::route('/{record}/edit'),
        ];
    }
}