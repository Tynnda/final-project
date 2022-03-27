<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Country;
use App\Models\Offer;
use App\Models\City;
use App\Models\Chat;

use App\Models\User;

class ChatController extends Controller
{

    public function saveMessage(Request $request) {
        
        $message = new Chat();
        $message->text = $request->input('text');
        $message->user_id = $request->user()['id'];
        $message->offer_id = $request->input('offer_id');


        $message->save();
        
        return $message;

    }

    public function showMessages(Request $request) {

        //ziskani id prihlaseneho uzivatele
        $userId = $request->user()['id'];
        //ziskani id pozadovaneho inzeratu
        $offerId = $request["offer_id"];

        //vytahnu si z databaze data daneho offer
        $offer = Offer::where("id",$offerId)->get()[0];

        $messages = null;
        if($userId == $offer->user_id){
            //ziskavani zprav, pokud jsem tvurcem inzeratu
            $messages = 
                //dej mi vsechny zpravy
                Chat::with('user')
                //ktere patri k danemu offer_id
                ->where("offer_id", $offerId)
                ->get();
        } else {
            //ziskavani zprav, pokud nejsem tvurcem inzeratu
            $messages = 
                //dej mi vsechny zpravy
                Chat::with('user')
                //ktere patri k danemu offer_id
                ->where("offer_id", $offerId)
                //a ktere maji moje user_id (napsal jsem je ja)
                ->where("user_id", $userId)
                ->get();
        }

        
        
        

        return $messages;
    }
}
