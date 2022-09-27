<?php

namespace App\Http\Controllers;

use App\Models\Play;
use Illuminate\Http\Request;

class PlayController extends Controller
{
    public function show($slug)
    {
        return Play::where('slug', '=', $slug)->first();
    }

    public function store(Request $request)
    {
        $play = new Play;



        $play->save();

        return response()->json(["result" => "ok"], 201);
    }
}
