// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex">
      <SideBar />
      <div className="flex-1">
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;