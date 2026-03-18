import { useState } from "react"
import { createTask } from "../services/taskService"
import { useNavigate } from "react-router-dom"

function TaskCreate() {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const submit = async (e) => {
        e.preventDefault()

        await createTask({
            title,
            description,
            created_by:1
        })

        navigate("/")
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">
                Create Task
            </h1>
            <form onSubmit={submit} className="space-y-4">

                <input
                    className='border p-2 w-full'
                    placeholder='Task title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <textarea
                    className='border p-2 w-full'
                    placeholder='Description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <button
                    className='bg-blue-600 text-white px-4 py-2 rounded'
                >
                    Create
                </button>

            </form>
        </div>
    )
}

export default TaskCreate