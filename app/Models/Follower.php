<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
    // Factories allow generation of dummy data with migrations to the database
    use HasFactory;

    protected $table = 'followers';

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
