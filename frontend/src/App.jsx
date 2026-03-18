import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./pages/TaskList";
import TaskCreate from "./pages/TaskCreate";
import TaskDetail from "./pages/TaskDetail";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TaskList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks/create"
          element={
            <ProtectedRoute>
              <TaskCreate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks/:id"
          element={
            <ProtectedRoute>
              <TaskDetail />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
