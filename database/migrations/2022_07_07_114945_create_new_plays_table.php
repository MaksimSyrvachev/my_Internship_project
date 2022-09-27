<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    //creating new migration for video upload table
    public function up()
    {
        Schema::create('new_plays', function (Blueprint $table) {
            $table->id();
            $table->string('video')->nullable();
            $table->string('description')->nullable();
            $table->string('title')->nullable();
            $table->string('crew')->nullable();
            $table->decimal('price',6,2)->nullable();
            $table->string('genre')->nullable();
            $table->date('Release_date')->nullable();
            $table->string('cover')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');//creating cell for connection to users table (with help of user_id)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('new_plays');
    }
};
