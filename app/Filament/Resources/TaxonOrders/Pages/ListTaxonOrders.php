<?php

namespace App\Filament\Resources\TaxonOrders\Pages;

use App\Filament\Resources\TaxonOrders\TaxonOrderResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListTaxonOrders extends ListRecords
{
    protected static string $resource = TaxonOrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
