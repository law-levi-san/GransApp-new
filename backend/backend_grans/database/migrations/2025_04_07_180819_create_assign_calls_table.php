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
        Schema::create('assign_calls', function (Blueprint $table) {
            $table->id();
            $table->foreignId('query_id')->constrained('queries')->onDelete('cascade');
            $table->enum('assigned_engineer', ['Engineer 1', 'Engineer 2', 'Engineer 3']);
            $table->date('scheduled_date');
            $table->time('scheduled_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assign_calls');
    }
};
