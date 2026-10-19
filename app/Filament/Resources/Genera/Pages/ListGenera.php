<?php

namespace App\Filament\Resources\Genera\Pages;

use App\Filament\Resources\Genera\GenusResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListGenera extends ListRecords
{
    protected static string $resource = GenusResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
