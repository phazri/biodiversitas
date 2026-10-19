<?php

namespace App\Filament\Resources\TaxonClasses\Pages;

use App\Filament\Resources\TaxonClasses\TaxonClassResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListTaxonClasses extends ListRecords
{
    protected static string $resource = TaxonClassResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
