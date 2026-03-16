<?php

namespace App\Services;

use App\Repositories\TaskRepository;

class TaskService
{
    protected $tasks;

    public function __construct(TaskRepository $tasks)
    {
        $this->tasks = $tasks;
    }

    public function create(array $data)
    {
        return $this->tasks->create($data);
    }

    public function list()
    {
        return $this->tasks->all();
    }

    public function find($id)
    {
        return $this->tasks->find($id);
    }
}