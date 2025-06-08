<?php

namespace App\Http\Controllers\Api;


use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Identifiants invalides'], 401);
        }
        return response()->json(['message' => 'Vous êtes connecté']);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Vous êtes maintenant déconnecté']);
    }
}
