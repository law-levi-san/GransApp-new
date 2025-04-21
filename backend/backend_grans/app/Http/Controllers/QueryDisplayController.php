<?php

namespace App\Http\Controllers;
use App\Models\Query;
use Illuminate\Http\Request;


class QueryDisplayController extends Controller
{
    public function displayQueries()
{
    $queries = Query::all();
    return response()->json($queries); 
}

}
