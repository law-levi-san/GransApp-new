<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Employee;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function empLogin(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|min:6',
    ]);

    $user = Employee::where('email', $request->input('email'))->first();

    $user_id = $user->id;
    log::info('id: '. $user_id);

    if (!$user) {
        return response()->json([
            'message' => 'Email not found.'
        ], 404);  
    }

    if ($user && Hash::check($request->input('password'), $user->password)) {
        $token = $user->createToken('YourAppName')->plainTextToken; 

        return response()->json([
            'message' => 'Login successful',
            'employeeId' => $user_id,  
            'token' => $token, 
        ], 200);
    } else {
        return response()->json([
            'message' => 'Invalid email or password',
        ], 401);
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
            'password' => Hash::make($request->password),
         ]);

         // Handle the signup logic here
         return response()->json([
            'message' => 'Employee signed up successfully!',
            'employee_id' => $user->id, 
            'data' => $request->all()
        ]);

    }
}
