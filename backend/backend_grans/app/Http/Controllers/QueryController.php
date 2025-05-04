<?php

namespace App\Http\Controllers;

use App\Models\Query;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\QuerySubmitted;

class QueryController extends Controller
{
    public function store(Request $request, $id)
{

    \Log::info('Full request:', $request->all());

    $employee_id = $id;
    \Log::info('Received ID:'. $employee_id);

        // Validate input data
        $validator = Validator::make($request->all(), [
           'problem_statement' => 'required|string|max:255',
            'problem_description' => 'required|string|max:1000',
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

        $problemDescription = $request->problem_description ?? 'No description provided';

        try {
            // Create a new query
            $query = Query::create([
                'employee_id' => $employee_id,
                'problem_statement' => $request->problem_statement,
                'problem_description' => $problemDescription,
                'company_name' => $request->company_name,
                'phone_number' => $request->phone_number,
                'name' => $request->name,
                'email' => $request->email,
            ]);

            Mail::to('pappumaithry@gmail.com')->send(new QuerySubmitted($query));

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

    public function displayQueryStaff()
    {
        $queries = Query::with('AssignCall')->get();

        $queries = $queries->map(function ($query) {
            $query->has_assigned_call = $query->assignCall !== null;
            return $query;
        });

        return response()->json($queries);
    }


    //to be sent to super admin for approval of the query
    public function getAllQueriesAndAssignedEngineers()
{
    $queries = Query::with('assignCalls')->get();

    return response()->json($queries);
}


}
