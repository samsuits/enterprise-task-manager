import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createTask } from "../services/taskService"
import { getUsers } from "../services/userService"

function TaskCreate() {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [assignedUser, setAssignedUser] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.error(err)
        setUsers([])
      })
  }, [])

  const submit = async (e) => {
    e.preventDefault()

    if (!title) {
      alert("Title is required")
      return
    }

    try {
      await createTask({
        title,
        description,
        assigned_user_id: assignedUser || null
      })

      navigate("/")
    } catch (err) {
      console.error(err)
      alert("Failed to create task")
    }
  }

  return (
    <div className="p-8 max-w-xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Create Task
      </h1>

      <form onSubmit={submit} className="space-y-4">

        <input
          className="border p-2 w-full rounded"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="border p-2 w-full rounded"
          value={assignedUser}
          onChange={(e) => setAssignedUser(e.target.value)}
        >
          <option value="">Assign to user</option>

          {Array.isArray(users) && users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Task
        </button>

      </form>

    </div>
  )
}

export default TaskCreate