<?php

namespace App\Filament\Resources\Kingdoms\Pages;

use App\Filament\Resources\Kingdoms\KingdomResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditKingdom extends EditRecord
{
    protected static string $resource = KingdomResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
