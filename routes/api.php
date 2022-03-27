<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('/register', 'RegisterController@store');
Route::get("/offer", "App\Http\Controllers\CountryController@index");
Route::get("/search", "App\Http\Controllers\CountryController@search");
Route::post("/search/offers", "App\Http\Controllers\CountryController@offer");
Route::get("/search/offers", "App\Http\Controllers\CountryController@list");
Route::post("/offer/store", 'App\Http\Controllers\CountryController@store');
Route::get("/profile", 'App\Http\Controllers\CountryController@profile');

// chat
Route::get("/messages", 'App\Http\Controllers\ChatController@showMessages');
Route::post("/saveMessage", 'App\Http\Controllers\ChatController@saveMessage');

// sizes
Route::get("/sizes", 'App\Http\Controllers\SizesController@showSizes');








// Route::get("/search/offers", function () {
//     $result = Offer::class->allowedFilters('departure')->get();
//     return $result;
// });

