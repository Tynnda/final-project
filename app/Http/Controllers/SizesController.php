<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Country;
use App\Models\Offer;
use App\Models\City;
use App\Models\Chat;
use App\Models\Size;

use App\Models\User;

class SizesController extends Controller
{
    public function showSizes(Request $request){

        $sizes = Size::get();

        return $sizes;
    }
}
