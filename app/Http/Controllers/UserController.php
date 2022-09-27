<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    protected $user;

    public function __construct(){
        $this->middleware("auth:api",["except" => ["login","register"]]);
        $this->user = new User;
    }

    public function register(Request $request){
        // Validate incoming request
        $validator = Validator::make($request->all(),[
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|min:6',
        ]);

        // If Validator fails then respond with this
        if($validator->fails()) {
            return response()->json([
            'success' => false,
            'message' => $validator->messages()->toArray()
            ], 500);
        }

        $data = [
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "email" => $request->email,
            "password" => Hash::make($request->password)
        ];

        $this->user->create($data);

        $responseMessage = "Registration Successful";

        // If Successful return this
        return response()->json([
            'success' => true,
            'message' => $responseMessage
        ], 200);
    }

    public function login(Request $request){
        // Validate incoming request
        $validator = Validator::make($request->all(),[
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        // If Validator fails quit and return with this json
        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->messages()->toArray()
            ], 500);
        }

        // Save credentials in variable
        $credentials = $request->only(["email","password"]);

        // Find user with given credentials
        $user = User::where('email',$credentials['email'])->first();

        // Check if user exists
        if($user){
            // If not then return with error
            if(!auth()->attempt($credentials)){
                $responseMessage = "Invalid username or password";
                return response()->json([
                    "success" => false,
                    "message" => $responseMessage,
                    "error" => $responseMessage
                ], 422);
            }
            // AccessToken will be interesting for security in the future
            $accessToken = auth()->user()->createToken('authToken')->accessToken;

            $responseMessage = "Login Successful";

            // Respond with token, response message and all user data
            return $this->respondWithToken($accessToken,$responseMessage,auth()->user());
        }
        // In case the user does not exist
        else{
            $responseMessage = "Sorry, this user does not exist";
            return response()->json([
                "success" => false,
                "message" => $responseMessage,
                "error" => $responseMessage
            ], 422);
        }
    }

    // Will log the user out
    public function logout(){
        $user = Auth::guard("api")->user()->token();
        $user->revoke();
        $responseMessage = "successfully logged out";
        return response()->json([
            'success' => true,
            'message' => $responseMessage
        ], 200);
    }
}
