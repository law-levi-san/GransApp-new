<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\AssignCall;
use App\Models\Query;

class AssignCallController extends Controller
{
    public function store(Request $request)
{
    Log::info('AssignCallController@store - Incoming request', $request->all());

    try {
        $validated = $request->validate([
            'query_id' => 'required|exists:queries,id',
            'assigned_engineer' => 'required|in:Engineer 1,Engineer 2,Engineer 3',
            'scheduled_date' => 'required|date',
            'scheduled_time' => 'required|date_format:H:i:s',
        ]);
    } catch (\Illuminate\Validation\ValidationException $e) {
        // Log validation errors
        Log::error('Validation failed', $e->errors());

        return response()->json([
            'message' => 'Validation failed',
            'errors' => $e->errors(),
        ], 422);
    }

    $assignCall = AssignCall::create($validated);

    Log::info('Engineer assignment created successfully', $assignCall->toArray());

    return response()->json([
        'message' => 'Engineer assigned successfully',
        'data' => $assignCall
    ], 201);
}
    public function showByQueryId($queryId)
    {
        $assignCall = AssignCall::where('query_id', $queryId)->with('queryRelation')->first();

        if (!$assignCall) {
            return response()->json(['message' => 'No assignment found for this query ID'], 404);
        }

        return response()->json($assignCall);
    }

}
