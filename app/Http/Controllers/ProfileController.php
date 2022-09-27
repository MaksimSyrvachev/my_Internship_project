<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;

class ProfileController extends Controller
{
    // Will return the logged in user's profile
    public function getProfile(Request $request) {
        // The request should include the user's id
        $id = $request->id;

        // If request does not include id then return error
        if (!$id){
            abort(403, 'Unauthorized User');
        }
        
        $user = User::where('id', $id)->get();

        return response()->json([
            'followings' => User::find($id)->followings,
            'followers' => User::find($id)->followers,
            'posts' => User::find($id)->posts,
            'description' => User::find($id)->bio,
            'user_name' => User::find($id)->first_name,
            'profile_picture' => User::find($id)->profile_picture
        ], 200);
    }
}
