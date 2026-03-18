import { BrowserRouter, Routes, Route} from "react-router-dom"
import TaskList from "./pages/TaskList"
import TaskCreate from "./pages/TaskCreate"
import TaskDetail from "./pages/TaskDetail"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />}></Route>
        <Route path="/tasks/create" element={<TaskCreate />}></Route>
        <Route path="/tasks/:id" element={<TaskDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App