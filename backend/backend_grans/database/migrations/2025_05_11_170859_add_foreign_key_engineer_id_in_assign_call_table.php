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
            $table->foreignId('engineer_id')->constrained('engineers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('assign_calls', function (Blueprint $table) {
            $table->dropColumn('engineer_id');
        });
    }
};
