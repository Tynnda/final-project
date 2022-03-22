<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\Country;
use App\Models\Offer;
use App\Models\City;

class CountryController extends Controller
{
    public function store(Request $request)
    {
        $offer = new Offer();
        $offer->user_id = $request->user()['id'];
        $offer->departure_id = $request->input('from')['id'];
        $offer->arrival_id = $request->input('to')['id'];
        $offer->departure_time = $request->input('date');
        $offer->text = $request->input('text');
        $offer->price = $request->input('price');
        // $offer->size_id = $request->input("size")['id'];
        $offer->save();


        return [
            'user_id'=> $request->user()['id'],
            'departure_id' => $request->input('from')['id'],
            'arrival_id' => $request->input('to')['id'],
            'departure_time' => $request->input('date'),
            'text' => $request->input('text'),
            'price' => $request->input('price'),
            // 'size_id' => $request->input("size")['id']
        ];

    }

    public function index(Request $request) {

            //  $query = DB::table('countries')

            //  $countries = $query
            // ->orderBy('name', 'asc')
            // ->get();

            $countries = Country::with('cities')->get();
            // dd($countries[0]->cities);

        return $countries;


    }
    
}
