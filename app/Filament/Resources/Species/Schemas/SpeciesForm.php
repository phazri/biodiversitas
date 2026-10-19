<?php

namespace App\Filament\Resources\Species\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class SpeciesForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('genus_id')
                    ->relationship('genus', 'name')
                    ->required(),
                Select::make('citation_id')
                    ->relationship('citation', 'title'),
                TextInput::make('accepted_name')
                    ->required(),
                TextInput::make('common_name'),
                Textarea::make('description_simple')
                    ->columnSpanFull(),
                TextInput::make('habitat'),
                TextInput::make('conservation_status')
                    ->required()
                    ->default('LC'),
                Toggle::make('is_endemic')
                    ->required(),
            ]);
    }
}
