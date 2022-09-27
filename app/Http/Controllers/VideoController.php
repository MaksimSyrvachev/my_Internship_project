<?php

namespace App\Http\Controllers;

use App\Models\NewPlay;
use App\Models\Play;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VideoController extends Controller
{
    public function video_upload(Request $request, $id) {
        // Check if a file was provided with the request
        if($request->hasFile('video')){
            
            //getting data from form 
            $desc = $request->input('description');
            $tit = $request->input('title');
            $crew_opt = $request->input('optionSelected');
            $file = $request->file('video');
            $filename = $file->getClientOriginalName();
            $filePath = $request->file('video')->storeAs('users_videos', $filename, 'public');//storing data to your local storage to 'public' folder
            $price = $request->input('price');
            $genre = $request->input('genre');
            $date = $request->input('date');
            $cover = $request->file('cover');
            $covername = $cover->getClientOriginalName();
            $coverPath = $request->file('cover')->storeAs('users_cover_videos', $covername, 'public');

            $data = [
                "video" => $filePath,
                "user_id" => $id,
                "description" => $desc,
                "title" => $tit,
                "crew" => $crew_opt,
                "price" => $price,
                "genre" => $genre,
                "Release_date" => $date,
                "cover" => $coverPath
            ];
 
            // Try creating a new play with the necessary data and respond with a success message
            try {
                NewPlay::create($data);
                return response()->json([
                    "message" => "Successfully uploaded",
    
               ]);
            } catch (\Throwable $th) {
                echo $th;
            }
            
        } else {
            return response()->json(["message" => "Select the video"]);
        }
    }
}
