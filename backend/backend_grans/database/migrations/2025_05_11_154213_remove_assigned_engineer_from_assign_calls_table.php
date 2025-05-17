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
        Schema::table('assign_calls', function (Blueprint $table) {
            $table->dropColumn('assigned_engineer');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('assign_calls', function (Blueprint $table) {
            $table->enum('assigned_engineer', ['Engineer 1', 'Engineer 2', 'Engineer 3']);
        });
    }
};
