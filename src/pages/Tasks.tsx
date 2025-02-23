// src/pages/Tasks.tsx
import TaskBoard from "../components/TaskBoard";
export default function Tasks() {
  return (
    <div className="p-2">
      <h2 className="pb-10 text-2xl font-bold">Tasks</h2>
      <TaskBoard />
    </div>
  );
}
