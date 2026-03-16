# Enterprise Task Manager

Enterprise Task Manager is a scalable internal task management system designed for large organizations.
The platform enables **team managers to create and assign tasks** while allowing **team members to manage and track their assigned work**.

This project is built as a **modern full-stack application** using Docker-based development.

---

# Tech Stack

## Backend

* Laravel (PHP Framework)
* PostgreSQL
* REST API architecture

## Frontend

* React
* Tailwind CSS
* Vite

## Infrastructure

* Docker
* Docker Compose

---

# Project Goals

This project aims to build a **production-grade enterprise task manager** that supports:

* Task creation and assignment
* Team-based task visibility
* Task comments and collaboration
* Scalable architecture for large organizations
* Containerized development environment

Future improvements will include:

* notifications
* activity logs
* file attachments
* subtasks
* analytics
* real-time updates

---

# System Architecture

Frontend (React) communicates with the backend (Laravel API).

```
React Frontend
      |
      | REST API
      |
Laravel Backend
      |
PostgreSQL Database
```

Docker containers run all services locally.

```
frontend container
backend container
postgres container
```

---

# Project Structure

```
enterprise-task-manager
│
├ docker-compose.yml
├ .env.example
├ README.md
│
├ backend
│  ├ app
│  │  ├ Http
│  │  │  └ Controllers
│  │  ├ Models
│  │  ├ Services
│  │  └ Repositories
│  ├ database
│  │  ├ migrations
│  │  └ seeders
│  ├ routes
│  │  └ api.php
│  └ Dockerfile
│
├ frontend
│  ├ src
│  │  ├ components
│  │  ├ pages
│  │  └ services
│  └ Dockerfile
```

---

# Features (MVP)

## Manager

Managers can:

* create tasks
* assign tasks to users
* assign tasks to teams
* view team tasks
* track task status

## Team Members

Members can:

* view assigned tasks
* update task status
* comment on tasks
* view team tasks

---

# Database Schema

Core tables:

```
teams
users
tasks
comments
sessions
```

Tasks may be assigned to either:

```
assigned_user_id
assigned_team_id
```

---

# Development Setup

## 1. Clone Repository

```
git clone <repository-url>
cd enterprise-task-manager
```

---

## 2. Copy Environment Files

```
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

---

## 3. Start Docker Environment

```
docker compose up --build
```

Docker will start:

```
frontend container
backend container
postgres container
```

---

## 4. Generate Laravel Application Key

```
docker exec -it task_backend php artisan key:generate
```

---

# Application URLs

Frontend

```
http://localhost:5173
```

Backend API

```
http://localhost:8000/api
```

---

# API Endpoints

## Tasks

```
GET /api/tasks
POST /api/tasks
GET /api/tasks/{id}
```

## Comments

```
POST /api/tasks/{task}/comments
```

---

# Development Workflow

Run the entire stack:

```
docker compose up
```

Stop services:

```
docker compose down
```

Run Laravel commands:

```
docker exec -it task_backend php artisan <command>
```

Example:

```
docker exec -it task_backend php artisan migrate
```

---

# Backend Architecture

The Laravel backend uses a layered architecture:

```
Controllers
Services
Repositories
Models
```

Request flow:

```
Controller
   ↓
Service
   ↓
Repository
   ↓
Model
   ↓
Database
```

This approach improves maintainability and testability for larger systems.

---

# Future Roadmap

Planned enterprise features:

* authentication and authorization
* activity logs
* file attachments
* subtasks
* notifications
* search
* reporting
* real-time updates
* audit trail

---

# Contributing

1. Create a new branch
2. Commit your changes
3. Open a pull request

---

# License

This project is open source and available under the MIT License.
