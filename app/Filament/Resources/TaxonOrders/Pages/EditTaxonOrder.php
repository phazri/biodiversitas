<?php

namespace App\Filament\Resources\TaxonOrders\Pages;

use App\Filament\Resources\TaxonOrders\TaxonOrderResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditTaxonOrder extends EditRecord
{
    protected static string $resource = TaxonOrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
