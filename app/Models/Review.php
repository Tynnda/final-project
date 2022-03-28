<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    public function recieverReview()
    {
        return $this->belongsTo(User::class, 'reciever_id', 'id');

    }
    public function giverReview()
    {
        return $this->belongsTo(User::class, 'giver_id', 'id');

    }
}
