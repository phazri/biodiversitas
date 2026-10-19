<?php

namespace App\Filament\Resources\Media\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class MediaForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('species_id')
                    ->relationship('species', 'id')
                    ->required(),
                FileUpload::make('image_url')
                    ->image()
                    ->required(),
                TextInput::make('caption'),
                TextInput::make('life_stage')
                    ->required()
                    ->default('adult'),
                Toggle::make('is_self_photographed')
                    ->required(),
            ]);
    }
}
