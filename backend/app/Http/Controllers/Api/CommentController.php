<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\CommentService;

class CommentController extends Controller
{
    protected $comments;

    public function __construct(CommentService $comments)
    {
        $this->comments = $comments;
    }

    public function store(Request $request, $taskId)
    {
        return response()->json(
            $this->comments->create([
                'task_id' => $taskId,
                'user_id' => $request->user_id,
                'comment' => $request->comment
            ])
        );
    }
}
