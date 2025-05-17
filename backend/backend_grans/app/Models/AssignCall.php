<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Query;
use App\Models\Engineers;


class AssignCall extends Model
{
    use HasFactory;

    protected $fillable = [
        'query_id',
        'scheduled_date',
        'scheduled_time',
    ];

    public function queryRelation()
    {
        return $this->belongsTo(Query::class);
    }

    public function engineerRelation(){
        return $this->belongsTo(Engineers::class);
    }
}
