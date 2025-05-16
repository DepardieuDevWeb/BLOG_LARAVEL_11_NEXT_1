<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = ['Politique', 'Economie', 'Tech', 'Sport', 'Musique'];
        foreach ($categories as $name) {
            $category = Category::create([
                'name' => $name,
                'slug' => Str::slug($name)
            ]);
            Article::factory(3)->count(3)->create([
                'category_id' => $category->id,
            ]);
        }
    }
}
