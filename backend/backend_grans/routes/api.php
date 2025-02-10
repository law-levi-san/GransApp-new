<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\QueryController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\QueryDisplayController;

// User Routes
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth Routes
Route::post('/emplogin', [AuthController::class, 'empLogin']);
Route::get('/empsignup', [AuthController::class, 'empSignup']); // Should be POST instead of GET if it's user registration

// Query Routes
Route::post('/postQuery', [QueryController::class, 'store']); // Use '/query' to follow REST API best practices
Route::get('/query', [QueryController::class, 'getQuery']); 

// Staff Routes
Route::post('/stafflogin', [StaffController::class, 'staffLogin']);
Route::get('/staffsignup', [StaffController::class, 'staffSignup']); // Should be POST if it's user registration

// Display Queries
Route::get('/displayquerystaff', [QueryDisplayController::class, 'displayQueries']); // Use '/displayqueries' to follow REST API best practices
