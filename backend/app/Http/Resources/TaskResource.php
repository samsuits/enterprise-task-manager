<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'status' => $this->status,
            'priority' => $this->priority,

            'assigned_user' => $this->assignedUser ? [
                'id' => $this->assignedUser->id,
                'name' => $this->assignedUser->name
            ] : null,

            'assigned_team' => $this->assignedTeam ? [
                'id' => $this->assignedTeam->id,
                'name' => $this->assignedTeam->name
            ] : null,

            'comments' => $this->comments->map(function($comment) {
                return [
                    'id' => $comment->id,
                    'comment' => $comment->comment
                ];
            }),
            'created_at' => $this->created_at,
        ];
    }
}
