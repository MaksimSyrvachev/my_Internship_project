<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Play extends Model
{
    protected $connection = 'mongodb';
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'owner',
        'crew', // Make use of a list of objects
        'path',
        'thumbnail',
        'releaseDate',
        'rentPrice',
        'emotions', // Make use of a list of objects
    ];
}
