<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
            'name' => 'viewer',
            'description' => 'The role given to default users'
        ]);

        Role::create([
            'name' => 'creator',
            'description' => 'The role given to people who sign up as a creator.'
        ]);

        Role::create([
            'name' => 'admin',
            'description' => 'The role given to admins. Beware, they have a lot of power!'
        ]);
    }
}
