<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Following extends Model
{
    // Factories allow generation of dummy data with migrations to the database
    use HasFactory;

    protected $table = 'followings';

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
