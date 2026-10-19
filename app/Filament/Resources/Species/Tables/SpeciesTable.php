<?php

namespace App\Filament\Resources\Species\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SpeciesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('genus.name')
                    ->searchable(),
                TextColumn::make('citation.title')
                    ->searchable(),
                TextColumn::make('accepted_name')
                    ->searchable(),
                TextColumn::make('common_name')
                    ->searchable(),
                TextColumn::make('habitat')
                    ->searchable(),
                TextColumn::make('conservation_status')
                    ->searchable(),
                IconColumn::make('is_endemic')
                    ->boolean(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
