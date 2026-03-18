<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\TaskService;

class TaskController extends Controller
{
    protected $tasks;

    public function __construct(TaskService $tasks)
    {
        $this->tasks = $tasks;
    }

    public function index()
    {
        return response()->json($this->tasks->list());
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'assigned_user_id' => 'nullable|exists:users,id',
            'assigned_team_id' => 'nullable|exists:teams,id'
        ]);

        return response()->json(
            $this->tasks->create([
                ...$request->all(),
                'created_by' => $request->user()->id
            ])
        );
    }

    public function show($id)
    {
        return response()->json($this->tasks->find($id));
    }
}