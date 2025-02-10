<?php

namespace App\Http\Controllers;

use App\Models\Query;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class QueryController extends Controller
{
    public function store(Request $request, $id)
{
    \Log::info('Received ID:'. $id);


        // Validate input data
        $validator = Validator::make($request->all(), [
           'problem_statement' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'company_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:15',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            // Create a new query
            $query = Query::create([
                'problem_statement' => $request->problem_statement,
                'description' => $request->description,
                'company_name' => $request->company_name,
                'phone_number' => $request->phone_number,
                'name' => $request->name,
                'email' => $request->email,
            ]);

            Log::info('Query successfully stored:', $query->toArray());

            return response()->json([
                'message' => 'Query submitted successfully!',
                'query' => $query,
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error storing query:', ['error' => $e->getMessage()]);

            return response()->json([
                'message' => 'Something went wrong while storing the query',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function getQuery()
    {
        try {
            $queries = Query::all();

            return response()->json([
                'message' => 'All queries fetched successfully!',
                'data' => $queries,
            ], 200);
        } catch (\Exception $e) {
            Log::error('Error fetching queries:', ['error' => $e->getMessage()]);

            return response()->json([
                'message' => 'Something went wrong while fetching queries',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
