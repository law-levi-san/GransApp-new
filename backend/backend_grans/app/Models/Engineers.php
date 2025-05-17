<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\AssignCalls;

class Engineers extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];


    public function assignCallsRelation(){
        return $this->hasMany(AssignCalls::class);
    }
}
