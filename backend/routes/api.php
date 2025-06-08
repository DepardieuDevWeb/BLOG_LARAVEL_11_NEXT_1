<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\CategoryController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('comments', [CommentController::class, 'store']);

// Route::apiResource('categories', CategoryController::class);
// Route::apiResource('articles', ArticleController::class);
// Route::apiResource('comments', CommentController::class);
Route::post('/login', [AuthController::class, 'login']);
Route::delete('/logout', [AuthController::class, 'logout']);
Route::apiResources([
    'categories' => CategoryController::class,
    'articles' => ArticleController::class,
]);
