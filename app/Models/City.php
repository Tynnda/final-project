<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Country;

class City extends Model
{
    use HasFactory;

    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id', 'id');

    }
    public function offer()
    {
        return $this->hasOne(Offer::class);

    }

    public function getCityIdByName($name)
    {
        // dd('hey');
        $city = City::where('name', 'LIKE', '%' . $name . '%')
        ->get();
        return $city['id'];
    }

}
