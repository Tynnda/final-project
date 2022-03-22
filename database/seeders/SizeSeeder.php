<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Size;
use DB;

class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('sizes')->truncate();
        $sizes =[
            ['value' => 'S'],
            ['value' => 'M'],
            ['value' => 'L'],
        ];
        foreach($sizes as $size) {
            $newSize = Size::create([
                'value' => $size['value']
            ]);
        }
    }
}
