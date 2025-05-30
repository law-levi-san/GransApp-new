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
        Schema::table('queries', function (Blueprint $table) {
            $table->dropForeign(['employee_id']); 
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');
        });
    }


    public function down(): void
    {
        Schema::table('queries', function (Blueprint $table) {
        $table->dropForeign(['employee_id']);
        $table->foreign('employee_id')->references('id')->on('staff')->onDelete('cascade'); 
        });
    }
};
