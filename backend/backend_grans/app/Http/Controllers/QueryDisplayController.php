<?php

namespace App\Http\Controllers;
use App\Models\Query;
use Illuminate\Http\Request;


class QueryDisplayController extends Controller
{
    public function displayQueries()
    {
        // Fetch all queries
        $queries = Query::all();

        // Convert queries into plain text format
        $plainText = "";
        foreach ($queries as $query) {
            $plainText .= "Query ID: {$query->id}\n";
            $plainText .= "Problem Statement: {$query->problem_statement}\n";
            $plainText .= "Description: {$query->description}\n";
            $plainText .= "Name: {$query->name}\n";
            $plainText .= "Phone Number: {$query->phone_number}\n";
            $plainText .= "Company Name: {$query->company_name}\n";
            $plainText .= "Email: {$query->email}\n";
            $plainText .= "--------------------------------\n";
        }

        // Return response in plain text format
        return response($plainText, 200)->header('Content-Type', 'text/plain');
    }
}
