<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\Country;
use App\Models\Offer;
use App\Models\City;

use App\Models\User;
use Illuminate\Support\Facades\Auth;


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
        // $offer->size_id = $request->input('size')['id'];
        $offer->save();


        return [
            'user_id'=> $request->user()['id'],
            'departure_id' => $request->input('from')['id'],
            'arrival_id' => $request->input('to')['id'],
            'departure_time' => $request->input('date'),
            'text' => $request->input('text'),
            'price' => $request->input('price'),
            // 'size_id' => $request->input('size')['id']
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

    public function search(Request $request) {

        
        $offers = Country::with('cities')->get();

        return $offers;

    }

    // public function offer(Request $request) {

        
    //     $offers = Offer::query()->where('departure_id', $request->input('from')['id'], $request->input('to')['id'])->get();


    //     $offers = $query;
    //     ->get();


    //     return $offers;

    // }

    public function offer(Request $request){

        $dateFrom = $request->input('dateFrom');
        $dateTo = $request->input('dateTo');

        
        $offers=Offer::with('user', 'departure', 'arrival')
        ->where(function($element) use ($request) {
            $element
                ->where('departure_id', $request->input('from')['id'])
                ->where('arrival_id', $request->input('to')['id'])
                ->where('departure_time', ">=", $request->input('dateFrom'))
                ->where('departure_time', "<=", $request->input('dateTo'));
        })
        
        ->get()
        ->toArray();

        return $offers;

    }

    public function list(Request $request) {
        $offers=Offer::with('user', 'departure', 'arrival')->get();

        return $offers;
    }
    
    // public function search(Request $request){

    //     $offers=Offer::filter()->get();
    //     return $offers;

    // }

    public function profile() {

        // $users = User::with('offers')->get();

        // $user = User::where('user_id', Auth::user()->id)->where('status', 'Completed')->get();
        $user = Offer::where('user_id', Auth::user()->id)->with('user', 'departure', 'arrival')->get();

        // dd($user);

        return $user;


    }

    public function profileById(Request $request) {

        // $users = User::with('offers')->get();
        
        // $user = User::where('user_id', Auth::user()->id)->where('status', 'Completed')->get();
        $user = Offer::where('user_id', $request['user_id'])->with('user', 'departure', 'arrival')->get();
        // dd($user);

        return $user;


    }

}
