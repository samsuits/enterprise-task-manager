<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title',
        'description',
        'status',
        'priority',
        'assigned_user_id',
        'assigned_team_id',
        'created_by',
        'due_date'
    ];

    // Task assigned to user
    public function assignedUser()
    {
        return $this->belongsTo(User::class, 'assigned_user_id');
    }

    // Task assigned to team
    public function assignedTeam()
    {
        return $this->belongsTo(Team::class, 'assigned_team_id');
    }

    // Task creator
    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    // Comments on task
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}