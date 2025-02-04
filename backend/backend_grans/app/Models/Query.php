<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Query extends Model
{
    use HasFactory;

    protected $fillable = [
        'problem_statement',
        'description',
        'name',
        'phone_number',
        'company_name',
        'email'
    ];
    
}
