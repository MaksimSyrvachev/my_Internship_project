<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Verification extends Model
{
    use HasFactory;

    protected $fillable = [
        'idFront',
        'idBack',
        'selfie',
    ];

    public function users()
    {
        return $this
            ->belongsTo(User::class)
            ->withTimestamps();
    }
}
