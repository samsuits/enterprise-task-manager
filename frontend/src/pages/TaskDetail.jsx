import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getTask, addComment, updateTaskStatus } from "../services/taskService"

function TaskDetail() {

  const { id } = useParams()

  const [task, setTask] = useState(null)
  const [comment, setComment] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTask(id)
      .then(res => {
        setTask(res.data)
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  const submit = async (e) => {
    e.preventDefault()

    if (!comment) return

    try {
      await addComment(id, {
        user_id: 1,
        comment
      })

      setComment("")
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  const changeStatus = async (status) => {
    try {
      await updateTaskStatus(id, status)
      setTask(prev => ({ ...prev, status }))
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <p className="p-8">Loading...</p>
  if (!task) return <p className="p-8">Task not found</p>

  return (
    <div className="p-8 max-w-2xl mx-auto">

      <h1 className="text-2xl font-bold">{task.title}</h1>

      <p className="mt-4">{task.description}</p>

      <p className="mt-2 text-sm text-gray-600">
        Assigned to: {task.assigned_user?.name || "Unassigned"}
      </p>

      {/* Status Dropdown */}
      <select
        value={task.status}
        onChange={(e) => changeStatus(e.target.value)}
        className="border p-2 mt-4"
      >
        <option value="created">Created</option>
        <option value="assigned">Assigned</option>
        <option value="in_progress">In Progress</option>
        <option value="in_review">In Review</option>
        <option value="completed">Completed</option>
      </select>

      {/* Comments */}
      <h2 className="mt-6 font-semibold">Comments</h2>

      {task.comments?.map(c => (
        <div key={c.id} className="border p-3 mt-2 rounded">
          {c.comment}
        </div>
      ))}

      <form onSubmit={submit} className="mt-4 space-y-2">

        <input
          className="border p-2 w-full"
          placeholder="Add comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Comment
        </button>

      </form>

    </div>
  )
}

export default TaskDetail