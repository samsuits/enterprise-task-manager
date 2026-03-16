<?php
namespace App\TaskRepository;

use App\Models\Task;

class TaskRepository
{
    public function create(array $data)
    {
        return Task::create($data);
    }

    public function all()
    {
        return Task::with(['assignedUser', 'assignedTeam', 'creator'])
        ->latest()
        ->get();
    }

    public function find($id)
    {
        return Task::with(['assignedUser', 'assignedTeam', 'creator'])
        ->findOrFail($id);
    }
}