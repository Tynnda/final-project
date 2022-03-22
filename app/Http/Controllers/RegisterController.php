<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegisterController extends Controller
{
    function store(Request $request) {

        $data = $request->all();
        
        

        return $data;
    }
}
