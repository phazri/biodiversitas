<?php

namespace App\Filament\Resources\TaxonClasses\Pages;

use App\Filament\Resources\TaxonClasses\TaxonClassResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditTaxonClass extends EditRecord
{
    protected static string $resource = TaxonClassResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
