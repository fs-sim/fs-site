<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function test()
    {
        return response()->json(['message' => 'Hello'], 200);
    }
}
