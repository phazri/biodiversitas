<?php

namespace App\Filament\Resources\Phylums\Pages;

use App\Filament\Resources\Phylums\PhylumResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditPhylum extends EditRecord
{
    protected static string $resource = PhylumResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
