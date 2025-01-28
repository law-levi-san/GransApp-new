<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Employee;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function empLogin(Request $request)
{
    // Validate email and password inputs
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|min:6',
    ]);

    // Retrieve the user based on the email
    $user = Employee::where('email', $request->input('email'))->first();

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
        // Invalid credentials
        return response()->json([
            'message' => 'Invalid email or password',
        ], 401); // 401 Unauthorized
    }
}

    public function empSignup(Request $request){
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

         $user = Employee::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => ($request->password),
         ]);

         // Handle the signup logic here
         return response()->json([
            'message' => 'Employee signed up successfully!',
            'data' => $request->all()
        ]);

    }
}
