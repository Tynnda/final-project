<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    public function cities() {

        return $this->hasMany(City::class);
    }

    public function user(){

        return $this->belongsTo(User::class);

    }

    public function size(){

        return $this->belongsTo(Size::class);

    }
}
