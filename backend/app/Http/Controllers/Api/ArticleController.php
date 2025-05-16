<?php

namespace App\Http\Controllers\Api;

use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use Illuminate\Support\Facades\Storage;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Article::with('category')->latest()->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ArticleRequest $request)
    {
        $requestValidated = $request->validated();
        $article = Article::create($requestValidated);

        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')->store('articles/' . $article->id, 'public');
            $article->update(['thumbnail' => $thumbnailPath]);
        }
        return response()->json([
            'message' => 'Article ajouté avec succès',
            'data' => $article
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        $article->load('category');
        return response()->json([
            'data' => $article
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ArticleRequest $request, Article $article)
    {
        $requestValidated = $request->validated();
        if ($request->hasFile('thumbnail')) {
            if ($article->thumbnail && Storage::disk('public')->exists($article->thumbnail)) {
                Storage::disk('public')->delete($article->thumbnail);
            }
            $requestValidated['thumbnail'] = $request->file('thumbnail')->store('articles/' . $article->id, 'public');
        }
        $article->update($requestValidated);
        return response()->json([
            'message' => 'Article modifié avec succès',
            'data' => $article
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        if ($article->thumbnail && Storage::disk('public')->exists($article->thumbnail)) {
            Storage::disk('public')->delete($article->thumbnail);
        }
        $article->delete();
        return response()->json([
            'message' => 'Article supprimé avec succès',
        ]);
    }
}
