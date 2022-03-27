<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use App\Models\Size;

class ImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sizes')->truncate();

        $sizes = [
            ['value' => 'images/pocket.png'],
            ['value' => 'images/backpack.png'],
            ['value' => 'images/luggage.png'],
            ['value' => 'images/suitcase.png']
        ];

        foreach($sizes as $size) {
            $newSize = Size::create([
                'value' => $size['value']
            ]);


        }

    }
}
