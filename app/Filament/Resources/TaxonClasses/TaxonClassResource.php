<?php

namespace App\Filament\Resources\TaxonClasses;

use App\Filament\Resources\TaxonClasses\Pages\CreateTaxonClass;
use App\Filament\Resources\TaxonClasses\Pages\EditTaxonClass;
use App\Filament\Resources\TaxonClasses\Pages\ListTaxonClasses;
use App\Filament\Resources\TaxonClasses\Schemas\TaxonClassForm;
use App\Filament\Resources\TaxonClasses\Tables\TaxonClassesTable;
use App\Models\TaxonClass;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class TaxonClassResource extends Resource
{
    protected static ?string $model = TaxonClass::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return TaxonClassForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return TaxonClassesTable::configure($table);
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
            'index' => ListTaxonClasses::route('/'),
            'create' => CreateTaxonClass::route('/create'),
            'edit' => EditTaxonClass::route('/{record}/edit'),
        ];
    }
}
