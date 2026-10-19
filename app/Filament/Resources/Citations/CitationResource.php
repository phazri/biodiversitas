<?php

namespace App\Filament\Resources\Citations;

use App\Filament\Resources\Citations\Pages\CreateCitation;
use App\Filament\Resources\Citations\Pages\EditCitation;
use App\Filament\Resources\Citations\Pages\ListCitations;
use App\Filament\Resources\Citations\Schemas\CitationForm;
use App\Filament\Resources\Citations\Tables\CitationsTable;
use App\Models\Citation;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class CitationResource extends Resource
{
    protected static ?string $model = Citation::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Schema $schema): Schema
    {
        return CitationForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return CitationsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListCitations::route('/'),
            'create' => CreateCitation::route('/create'),
            'edit' => EditCitation::route('/{record}/edit'),
        ];
    }
}
