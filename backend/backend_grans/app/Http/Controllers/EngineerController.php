<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Engineers;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class EngineerController extends Controller
{
    public function addEngineer(Request $request){
        \Log::info("engineer request recieved: ", $request->all());

        $validator = Validator::make($request->all(),
        [
            'name' => 'required|string',
        ]);

        try{
            $engineer = Engineers::create([
                'name' => $request->name,
            ]);
             Log::info('Engineer successfully added:', $engineer->toArray());

            return response()->json([
                'message' => 'Query submitted successfully!',
                'query' => $engineer,
            ], 200);
        }
        catch(\Exception $e){
            Log::error("error adding the engineer: ", ['error' => $e->getMessage()]);
        }
    }

    public function getAllEngineers(){

        \Log::info("Fetching all engineers");
        
        try{
            $engineers = Engineers::all();
            return $engineers;
        }
        catch(\Exception $e){
            Log::error("Error fetching all engineers: ", ['error' => $e->getMessage()]);
        }
    }

        public function editEngineer($id, Request $request)
    {
        \Log::info("Edit engineer request received for ID: {$id}", $request->all());

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        try {
        $engineer = Engineers::find($id);

            if (!$engineer) {
                return response()->json(['error' => 'Engineer not found'], 404);
            }

            $engineer->name = $request->name;
            $engineer->save();

            return response()->json(['success' => true, 'data' => $engineer], 200);
        } catch (\Exception $e) {
            \Log::error("Error editing the engineer: ", ['error' => $e->getMessage()]);
            return response()->json(['error' => 'Failed to update engineer'], 500);
        }
    }

}
