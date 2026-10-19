<?php

namespace App\Filament\Resources\TaxonOrders;

use App\Filament\Resources\TaxonOrders\Pages\CreateTaxonOrder;
use App\Filament\Resources\TaxonOrders\Pages\EditTaxonOrder;
use App\Filament\Resources\TaxonOrders\Pages\ListTaxonOrders;
use App\Filament\Resources\TaxonOrders\Schemas\TaxonOrderForm;
use App\Filament\Resources\TaxonOrders\Tables\TaxonOrdersTable;
use App\Models\TaxonOrder;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class TaxonOrderResource extends Resource
{
    protected static ?string $model = TaxonOrder::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return TaxonOrderForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return TaxonOrdersTable::configure($table);
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
            'index' => ListTaxonOrders::route('/'),
            'create' => CreateTaxonOrder::route('/create'),
            'edit' => EditTaxonOrder::route('/{record}/edit'),
        ];
    }
}
