<?php

namespace App\Filament\Resources\Kingdoms;

use App\Filament\Resources\Kingdoms\Pages\CreateKingdom;
use App\Filament\Resources\Kingdoms\Pages\EditKingdom;
use App\Filament\Resources\Kingdoms\Pages\ListKingdoms;
use App\Filament\Resources\Kingdoms\Schemas\KingdomForm;
use App\Filament\Resources\Kingdoms\Tables\KingdomsTable;
use App\Models\Kingdom;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class KingdomResource extends Resource
{
    protected static ?string $model = Kingdom::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return KingdomForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return KingdomsTable::configure($table);
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
            'index' => ListKingdoms::route('/'),
            'create' => CreateKingdom::route('/create'),
            'edit' => EditKingdom::route('/{record}/edit'),
        ];
    }
}
