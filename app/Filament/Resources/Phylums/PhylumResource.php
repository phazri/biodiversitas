<?php

namespace App\Filament\Resources\Phylums;

use App\Filament\Resources\Phylums\Pages\CreatePhylum;
use App\Filament\Resources\Phylums\Pages\EditPhylum;
use App\Filament\Resources\Phylums\Pages\ListPhylums;
use App\Filament\Resources\Phylums\Schemas\PhylumForm;
use App\Filament\Resources\Phylums\Tables\PhylumsTable;
use App\Models\Phylum;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class PhylumResource extends Resource
{
    protected static ?string $model = Phylum::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return PhylumForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PhylumsTable::configure($table);
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
            'index' => ListPhylums::route('/'),
            'create' => CreatePhylum::route('/create'),
            'edit' => EditPhylum::route('/{record}/edit'),
        ];
    }
}
