<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    // database/migrations/yyyy_mm_dd_create_corprofiles_table.php

    public function up()
    {
        Schema::create('corprofiles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('tagline');
            $table->string('profession');
            $table->string('location');
            $table->string('image')->nullable(); // Add image column, allow null
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('corprofiles');
    }
};
