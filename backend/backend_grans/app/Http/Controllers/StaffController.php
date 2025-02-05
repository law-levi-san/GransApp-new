<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Staff;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class StaffController extends Controller
{
public function staffLogin(Request $request)
{
    $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);
    
        $user = Staff::where('email', $request->input('email'))->first();
    
        if (!$user) {
            return response()->json([
                'message' => 'Email not found.'
            ], 404);  // 404 means not found
        }
    
        if ($user && Hash::check($request->input('password'), $user->password)) {
            $token = $user->createToken('YourAppName')->plainTextToken;  // Using Laravel Sanctum for token generation
    
            return response()->json([
                'message' => 'Login successful',
                'token' => $token, // Pass the token in the response
            ], 200);
        } else {
            return response()->json([
                'message' => 'Invalid email or password',
            ], 401); // 401 Unauthorized
        }
    }
    
        public function staffSignup(Request $request){
            $validator = Validator::make($request->all(),[
                'name' => 'required|string',
                'email' => 'required|email',
                'password' => 'required|min:8',
            ]);
    
            if($validator->fails()){
                return response()->json([
                    'success' => false,
                    'message' => $validator->errors(),
                ],400);
            }
    
             $user = Staff::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => ($request->password),
             ]);
    
             return response()->json([
                'message' => 'Employee signed up successfully!',
                'data' => $request->all()
            ]);
    
        }
}
