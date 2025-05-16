<?php

namespace App\Models;

use App\Models\Article;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'article_id',
        'name',
        'content'
    ];

    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
