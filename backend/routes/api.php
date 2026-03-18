<?php

use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/me', [AuthController::class, 'me']);

    Route::get('/tasks', [TaskController::class,'index']);
    Route::post('/tasks', [TaskController::class,'store']);
    Route::get('/tasks/{id}', [TaskController::class,'show']);

    Route::post('/tasks/{task}/comments', [CommentController::class,'store']);
});
