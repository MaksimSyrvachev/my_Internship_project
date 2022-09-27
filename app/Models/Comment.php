<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $connection = 'mongodb';
    use HasFactory;

    // The attributes that are mass assignable.
    protected $fillable = [
        'author_id',
        'parent_type',
        'parent_id',
        'body',
        'emotions', // Make use of a list of objects
    ];
}
