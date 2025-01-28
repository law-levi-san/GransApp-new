<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->string('name')->default('name')->change();
            $table->string('email')->default('email')->change()->unique();
            $table->string('password')->default('password')->change();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->string('name')->nullable(false)->change(); 
            $table->string('email')->nullable(false)->change(); 
            $table->string('password')->nullable(false)->change(); 
        });
    }
};
