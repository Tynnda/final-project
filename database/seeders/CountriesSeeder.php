<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use App\Models\Country;
use App\Models\City;

class CountriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('countries')->truncate();

        $countries =[
            ['name' => 'Austria','cities' => ['Viena', 'Salzburg']],
            ['name' => 'Belgium', 'cities' => ['Brussels']],
            ['name' => 'Bosna & Herzegovina', 'cities' => ['Banja Luka']],
            ['name' => 'Bulgaria', 'cities' => ['Burgas', 'Plovdid', 'Sofia', 'Varna']],
            ['name' => 'Croatia', 'cities' => ['Dubrovnik', 'Pula', 'Rijeka', 'Split', 'Zadar', 'Zagreb']],
            ['name' => 'Cyprus', 'cities' => ['Larnaca', 'Paphos']],
            ['name' => 'Czech Republic', 'cities' => ['Brno', 'Ostrava', 'Pardubice', 'Prague']],
            ['name' => 'Denmark', 'cities' => ['Aalborg', 'Aarhus', 'Billund', 'Copenhagen']],
            ['name' => 'Estonia', 'cities' => ['Tallinn']],
            ['name' => 'Finland',  'cities' => ['Helsinki', 'Lappeenranta', 'Tampere']],
            ['name' => 'France', 'cities' => ['Bordeaux', 'Dole', 'Marseille', 'Paris', 'Toulouse']],
            ['name' => 'Germany', 'cities' => ['Dortmund','Dresden', 'Frankfurt', 'Hamburk', 'Nuremberg']],
            ['name' => 'Greece', 'cities' => ['Athens', 'Corfu', 'Kos', 'Rhodos','Santorini', 'Zakynthos']],
            ['name' => 'Hungary', 'cities' => ['Budapest']],
            ['name' => 'Ireland', 'cities' => ['Cork', 'Dublin', 'Kerry', 'Knock']],
            ['name' => 'Israel', 'cities' => ['Tel Aviv']],
            ['name' => 'Italy', 'cities' => ['Bologna', 'Catania', 'Milan', 'Palermo', 'Rome', 'Venice']],
            ['name' => 'Latvia', 'cities' => ['Riga']],
            ['name' => 'Lithuania', 'cities' => ['Kaunas', 'Palanga', 'Vilnius']],
            ['name' => 'Luxembourg', 'cities' => ['Luxembourg']],
            ['name' => 'Malta', 'cities' => ['Malta']],
            ['name' => 'Montenegro', 'cities' => ['Podgorica']],
            ['name' => 'Morocco', 'cities' => ['Agadir', 'Fez', 'Nador', 'Rabat']],
            ['name' => 'Netherlands', 'cities' => ['Amsterdam', 'Eindhoven', 'Maastricht']],
            ['name' => 'Norway', 'cities' => ['Haugesund', 'Oslo']],
            ['name' => 'Poland', 'cities' => ['Katowice', 'Krakow', 'Lublin', 'Poznan','Warsaw', 'Wroclaw']],
            ['name' => 'Portugal', 'cities' => ['Faro', 'Lisbon', 'Ponta Delgada', 'Porto']],
            ['name' => 'Romania', 'cities' => ['Bucharest', 'Cluj', 'Sibiu', 'Suceava']],
            ['name' => 'Serbia', 'cities' => ['Nis']],
            ['name' => 'Slovakia', 'cities' => ['Bratislava', 'Kosice']],
            ['name' => 'Spain', 'cities' => ['Barcelona', 'Valencia', 'Ibiza', 'Madrid', 'Malaga', 'Seville', 'Valencia']],
            ['name' => 'Sweden', 'cities' => ['Lulea', 'Malmo', 'Orebro', 'Stockholm']],
            ['name' => 'Switzerland', 'cities' => ['Basel']],
            ['name' => 'Turkey', 'cities' => ['Bodrum', 'Dalaman']],
            ['name' => 'Ukraine', 'cities' => ['Kyiv']],
            ['name' => 'United Kingdom', 'cities' => ['Birmingham', 'Glasgow', 'Liverpool', 'London', 'Manchester']]
        ];

        foreach($countries as $country) {
            $newCountry = Country::create([
                'name' => $country['name']
            ]);
                foreach($country['cities'] as $city) {
                    City::create([
                        'name' => $city,
                        'country_id' => $newCountry->id
                    ]);
                }

        }
    }
}
