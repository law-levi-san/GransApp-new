<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\QueryController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\QueryDisplayController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/emplogin', [AuthController::class, 'empLogin']);
Route::get('/empsignup', [AuthController::class, 'empSignup']);

Route::post('/postQuery/{id}', [QueryController::class, 'store']); 
Route::get('/query', [QueryController::class, 'getQuery']); 

Route::post('/stafflogin', [StaffController::class, 'staffLogin']);
Route::get('/staffsignup', [StaffController::class, 'staffSignup']); 

Route::get('/displayquerystaff', [QueryDisplayController::class, 'displayQueries']); 
