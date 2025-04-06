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
        'email' => 'required|email',
        'password' => 'required|min:6',
    ]);

    $user = Staff::where('email', $request->email)->first();

    if (!$user) {
        return response()->json([
            'message' => 'Email not found.',
        ], 404);
    }

    if (!Hash::check($request->password, $user->password)) {
        return response()->json([
            'message' => 'Invalid email or password.',
        ], 401);
    }

    // Generate authentication token (Sanctum required)
    $token = $user->createToken('YourAppName')->plainTextToken;

    return response()->json([
        'message' => 'Login successful',
        'token' => $token,
    ], 200);
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
                'password' => Hash::make($request->password),
             ]);
    
             return response()->json([
                'message' => 'Employee signed up successfully!',
                'data' => $request->all()
            ]);
    
        }
}
