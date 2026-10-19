<?php

namespace App\Filament\Resources\Phylums\Pages;

use App\Filament\Resources\Phylums\PhylumResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPhylums extends ListRecords
{
    protected static string $resource = PhylumResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
