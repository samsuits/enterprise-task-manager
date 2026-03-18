import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getTask, addComment } from "../services/taskService"

function TaskDetail()
{
    const { id } = useParams()

    const [task, setTask] = useState(null)
    const [comment, setComment] = useState("")

    useEffect(() => {
        getTask(id).then(res => {
            setTask(res.data)
        })
    }, [id])

    const submit = async (e) => {
        e.preventDefault()

        await addComment(id, {
            user_id: 1,
            comment
        })

        location.reload()
    }

    if (!task) return <div>Loading...</div>

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">
                {task.title}
            </h1>

            <p className="mt-4">
                {task.description}
            </p>

            <h2 className="mt-6 font-semibold">
                Comments
            </h2>

            {task.comments?.map(c => (
                <div key={c.id}
                    className="border p-3 mt-2 rounded">
                    {c.comment}
                </div>
            )) }

            <form onSubmit={submit} className="mt-4 space-y-2">
                <input
                    className="border p-2 w-full"
                    placeholder="Add comment"
                    value={comment || ""}
                    onChange={e => setComment(e.target.value)}
                />
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add Comment
                </button>
            </form>

        </div>
    )
}

export default TaskDetail