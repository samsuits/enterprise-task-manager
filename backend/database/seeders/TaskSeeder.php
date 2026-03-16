<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;

class TaskSeeder extends Seeder
{
    public function run()
    {
        Task::create([
            'title' => 'Fix login bug',
            'description' => 'Users cannot login after latest deployment',
            'status' => 'created',
            'priority' => 'high',
            'created_by' => 1
        ]);

        Task::create([
            'title' => 'Prepare sprint report',
            'description' => 'Prepare weekly sprint summary',
            'status' => 'assigned',
            'priority' => 'medium',
            'created_by' => 1
        ]);

        Task::create([
            'title' => 'Update documentation',
            'description' => 'Update API documentation',
            'status' => 'in_progress',
            'priority' => 'low',
            'created_by' => 1
        ]);

        Task::create([
            'title' => 'Fix payment gateway issue',
            'description' => 'Stripe payment not working',
            'status' => 'created',
            'priority' => 'high',
            'created_by' => 1
        ]);

        Task::create([
            'title' => 'Optimize database queries',
            'description' => 'Improve performance of task queries',
            'status' => 'in_review',
            'priority' => 'medium',
            'created_by' => 1
        ]);
    }
}