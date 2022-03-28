<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Review;

class ReviewController extends Controller
{
    
    public function getReviewsById(Request $request) {

        $reviews = Review::where('receiver_id', $request['user_id'])->get();

        return $reviews;

    }

}
