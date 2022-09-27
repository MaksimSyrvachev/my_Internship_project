<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    // Factories allow generation of dummy data with migrations to the database
    use HasFactory;

    protected $fillable = [
        'name',
    ];
}
