<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Review;

class ReviewController extends Controller
{
    
    public function getReviewsById($user_id, Request $request) {

        $reviews = Review::where('reciever_id', $user_id)->get();

        return $reviews;

    }
    public function postReviewsById($user_id, Request $request) {

        $review = new Review();
        $review->reciever_id = $user_id;
        $review->rating_value = $request->input('rating_value');
        $review->giver_id = $request->user()->id;
        $review->save();
        
        return $this->getReviewsById($user_id, $request);

    }

}
