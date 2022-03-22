<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Country;

class City extends Model
{
    use HasFactory;

    public function cities()
    {
        return $this->belongsTo(Country::class);

    }

    public function getCityIdByName($name)
    {
        dd('hey');
        $city = City::where('name', 'LIKE', '%' . $name . '%')
        ->get();
        return $city['id'];
    }

}
