<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    public function departure() {

        return $this->belongsTo(City::class, 'departure_id', 'id')->with('country');
         
        

    }
    public function arrival() {

        return $this->belongsTo(City::class, 'arrival_id', 'id')->with('country');
        

    }

    // public function city2() {
    //     return $this->belongsTo(City::class, 'arrival_id', 'id');
    // }

    public function user(){

        return $this->belongsTo(User::class);

    }

    public function size(){

        return $this->belongsTo(Size::class);

    }
}
