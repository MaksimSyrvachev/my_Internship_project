<?php

namespace Database\Seeders;

use App\Models\Follower;
use App\Models\Following;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
        ]);

        $user = User::factory()->create();

        Following::factory(6)->create([
            'user_id'=>$user->id
        ]);

        Follower::factory(6)->create([
            'user_id'=>$user->id
        ]);

        Post::factory(6)->create([
            'user_id'=>$user->id
        ]);
    }
}
