import { useEffect, useState } from "react"
import { getTasks } from "../services/taskService"
import { Link } from "react-router-dom"

function TaskList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks().then(res => {
            setTasks(res.data)
        })
    }, [])

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">
                Tasks
            </h1>

            <Link
                to="/tasks/create"
                className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                Create Task
            </Link>

            <div className="mt-6 space-y-4">
                {tasks.map(task => (
                    <div key={task.id}
                    className="border p-4 rounded">
                        <Link to={`/tasks/${task.id}`}>
                            <h2 className="font-semibold">
                                {task.title}
                            </h2>
                        </Link>

                        <p className="text-sm text-gray-600">
                            {task.status}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TaskList