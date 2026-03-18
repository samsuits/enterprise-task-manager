<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\TaskService;
use App\Http\Resources\TaskResource;
use App\Models\Task;

class TaskController extends Controller
{
    protected $tasks;

    public function __construct(TaskService $tasks)
    {
        $this->tasks = $tasks;
    }

    public function index()
    {
        return TaskResource::collection($this->tasks->list());
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

    public function updateStatus(Request $request, $id)
    {
        $task = Task::findOrFail($id);

        $validated = $request->validate([
            'status' => 'required|in:created,assigned,in_progress,in_progress,completed',
        ]);

        $task->status = $validated['status'];
        $task->save();

        return response()->json([
            'message' => 'Task status updated successfully',
            'data' => $task
        ]);
    }
}