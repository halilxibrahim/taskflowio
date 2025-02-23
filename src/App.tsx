
// src/App.tsx
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <h1 className="text-xl font-bold">TaskFlow</h1>
        <div>
          <Link className="mx-2" to="/">Dashboard</Link>
          <Link className="mx-2" to="/tasks">Tasks</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}


export default App