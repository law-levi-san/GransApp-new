<?php

namespace App\Http\Controllers;
use App\Models\Query;
use App\Models\Employee;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;


use Illuminate\Http\Request;

class QueryController extends Controller
{
    public function postQuery(Request $request)
{

    $validator = Validator::make($request->all(), [
        'problem_statement' => 'required|in:Technical Issue,Billing Issue,General Query',
        'problem_description' => 'required|string|max:1000',
        'name' => 'required|string|max:255',
        'phone_number' => 'required|digits:10',
        'company_name' => 'required|string|max:255',
        'email' => 'required|email',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'message' => $validator->errors(),
        ], 400);
    }

    $user = Employee::find($id);

    $query = Query::create([
        'employee_id' => $user->id,
        'problem_statement' => $request->problem_statement,
        'problem_description' => $request->problem_description,
        'name' => $request->name,
        'phone_number' => $request->phone_number,
        'company_name' => $request->company_name,
        'email' => $request->email,
    ]);

    return response()->json([
        'message' => 'Query submitted successfully!',
        'data' => $query, // Return the created query for better debugging
    ]);
}
}
