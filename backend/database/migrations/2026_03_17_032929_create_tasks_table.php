<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->text('description')->nullable();

            $table->enum('status', [
                'created',
                'assigned',
                'in_progress',
                'in_review',
                'completed'
            ])->default('created');

            $table->string('priority')->default('medium');

            $table->foreignId('assigned_user_id')->nullable()->index();
            $table->foreignId('assigned_team_id')->nullable()->index();

            $table->foreignId('created_by');

            $table->timestamp('due_data')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
