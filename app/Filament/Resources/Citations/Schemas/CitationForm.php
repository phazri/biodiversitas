<?php

namespace App\Filament\Resources\Citations\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class CitationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('authors')
                    ->required(),
                TextInput::make('year')
                    ->required()
                    ->numeric(),
                TextInput::make('source_type')
                    ->required(),
                Textarea::make('apa_formatted_text')
                    ->columnSpanFull(),
            ]);
    }
}
