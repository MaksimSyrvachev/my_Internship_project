<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    // The attributes that are mass assignable.
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'profile_picture',
        'password',
        'bio',
        'verified',
        'recommended_plays',
        'my_list',
    ];


    // The attributes that should be hidden for serialization.
    protected $hidden = [
        'password',
        'remember_token',
    ];


    // The attributes that should be cast.
    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_verified_at' => 'datetime',
    ];



    // public function followers() {
    //     return $this
    //         ->belongsToMany(Follower::class)
    //         ->withTimestamps();
    // }

    // public function follows($userId) {
    //     if ($this->followers()->where('following', $userId)->first()) {
    //         return true;
    //     }
    //     return false;
    // }

    public function roles() {
        return $this
            ->belongsToMany(Role::class)
            ->withTimestamps();
    }

    public function authorizeRoles($roles) {
        if ($this->hasAnyRole($roles)) {
            return true;
        }
        abort(401, 'This action is unauthorized.');
    }

    public function hasAnyRole($roles) {
        if (is_array($roles)) {
            foreach ($roles as $role) {
                if ($this->hasRole($role)) {
                    return true;
                }
            }
        } else {
                if ($this->hasRole($roles)) {
                return true;
            }
        }
        return false;
    }

    public function hasRole($role) {
        if ($this->roles()->where('name', $role)->first()) {
            return true;
        }
        return false;
    }

    //establishing links with other tables
    public function followings() {
        return $this->hasMany(Following::class, 'user_id');
    }

    public function followers() {
        return $this->hasMany(Follower::class, 'user_id' );
    }

    public function posts() {
        return $this->hasMany(Post::class, 'user_id' );
    }

    public function new_plays() {
        return $this->hasMany(NewPlay::class, 'user_id' );
    }
}
