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
        Schema::rename('employee', 'employees'); // Rename the table
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::rename('employees', 'employee'); // Rename it back in case of rollback
    }
};
