<?php

namespace App\Filament\Resources\Kingdoms\Pages;

use App\Filament\Resources\Kingdoms\KingdomResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListKingdoms extends ListRecords
{
    protected static string $resource = KingdomResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
