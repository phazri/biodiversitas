<?php

namespace App\Filament\Resources\Citations\Pages;

use App\Filament\Resources\Citations\CitationResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditCitation extends EditRecord
{
    protected static string $resource = CitationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
