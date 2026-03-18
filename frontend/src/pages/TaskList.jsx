import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getTasks } from "../services/taskService"
import { logout } from "../services/auth"

function TaskList() {

  const navigate = useNavigate()

  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

 // Fetch tasks
  useEffect(() => {
    getTasks()
      .then(res => {
        // Handle both formats: array OR { data: [...] }
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.data || []

        setTasks(data)
      })
      .catch(err => {
        console.error("Failed to fetch tasks:", err)
        setTasks([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tasks</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>

      <Link
        to="/tasks/create"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Task
      </Link>

      <div className="mt-6">

        {loading && <p>Loading tasks...</p>}

        {!loading && tasks.length === 0 && (
          <p>No tasks found</p>
        )}

        <div className="space-y-4">
          {Array.isArray(tasks) && tasks.map(task => (
            <div key={task.id} className="border p-4 rounded">

              <Link to={`/tasks/${task.id}`}>
                <h2 className="font-semibold">{task.title}</h2>
              </Link>

              <p className="text-sm text-gray-600">
                Status: {task.status}
              </p>

              <p className="text-sm text-gray-600">
                Assigned to: {task.assigned_user?.name || "Unassigned"}
              </p>

            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default TaskList