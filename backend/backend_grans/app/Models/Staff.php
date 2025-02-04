<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
<<<<<<< HEAD
use Laravel\Sanctum\HasApiTokens;

class Staff extends Model
{
    use HasFactory, HasApiTokens;

    protected $table = 'staff'; // Explicitly defining table name
    protected $fillable = ['name', 'email', 'password']; // Allow mass assignment
=======

class Staff extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];
>>>>>>> origin/maithrypappu
}
