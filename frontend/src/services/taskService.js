import api from "./api"

export const getTasks = () => {
    return api.get("/tasks")
}

export const createTask = (data) => {
    return api.post("/tasks", data)
}

export const getTask = (id) => {
    return api.get(`/tasks/${id}`)
}

export const addComment = (taskId, data) => {
    return api.post(`/tasks/${taskId}/comments`, data)
}

