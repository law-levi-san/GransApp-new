<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\QueryController;
use App\Http\Controllers\StaffController;

// User Routes
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth Routes
Route::post('/emplogin', [AuthController::class, 'empLogin']);
Route::post('/empsignup', [AuthController::class, 'empSignup']); // Should be POST instead of GET if it's user registration

// Query Routes
Route::post('/query', [QueryController::class, 'postQuery']); // Use '/query' to follow REST API best practices
Route::get('/query', [QueryController::class, 'getQuery']); 

// Staff Routes
Route::post('/staff/login', [StaffController::class, 'staffLogin']);
Route::post('/staff/signup', [StaffController::class, 'staffSignup']); // Should be POST if it's user registration
