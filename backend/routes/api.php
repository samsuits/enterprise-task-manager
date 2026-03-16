<?php

use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\CommentController;

Route::get('/tasks', [TaskController::class,'index']);
Route::post('/tasks', [TaskController::class,'store']);
Route::get('/tasks/{id}', [TaskController::class,'show']);

Route::post('/tasks/{task}/comments', [CommentController::class,'store']);