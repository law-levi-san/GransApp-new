<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Query extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'problem_statement',
        'problem_description',
        'name',
        'phone_number',
        'company_name',
        'email'
    ];
    
    public function assignCalls()
    {
        return $this->hasMany(AssignCall::class, 'query_id');
    }
    

}
