<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewPlay extends Model
{
    // Factories allow generation of dummy data with migrations to the database
    use HasFactory;

    // Table in the database called this way
    protected $table = 'new_plays';

    // Those are mass assignable with data
    protected $fillable = [
        'video',
        'user_id',
        'description',
        'title',
        'crew',
        'price',
        'genre',
        'Release_date',
        'cover',
    ];

    //connection to users table
    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
