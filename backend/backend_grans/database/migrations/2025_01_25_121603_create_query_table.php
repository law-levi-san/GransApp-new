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
        Schema::table('query', function (Blueprint $table) {
            $table->enum('problem_statement', ['Technical Issue', 'Billing Issue', 'General Query'])->change();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('query', function (Blueprint $table) {
            $table->string('problem_statement')->change();

        });    
    }
};
