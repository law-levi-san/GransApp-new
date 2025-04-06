<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('queries', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('employee_id')->default(1); 
            $table->foreign('employee_id')->references('id')->on('staff')->onDelete('cascade'); 
            $table->enum('problem_statement', ['Technical Issue', 'Billing Issue', 'General Query']);
            $table->string('problem_description');
            $table->string('name');
            $table->bigInteger('phone_number');
            $table->string('company_name');
            $table->string('email');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('queries');
    }
};
