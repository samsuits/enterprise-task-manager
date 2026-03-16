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
        $task = $this->tasks->create($request->all());

        return response()->json($task);
    }

    public function show($id)
    {
        return response()->json($this->tasks->find($id));
    }
}