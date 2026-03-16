<?php

namespace App\Services;

use App\Repositories\CommentRepository;

class CommentService
{
    protected $comments;

    public function __construct(CommentRepository $comments)
    {
        $this->comments = $comments;
    }

    public function create(array $data)
    {
        return $this->comments->create($data);
    }
}