// src/components/TaskBoard.tsx
import { useTaskStore } from "../store/taskStore";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import TaskItem from "./TaskItem";
import { useState } from "react";
import TaskForm from "./TaskForm";
import { useLocation } from "react-router-dom";

export default function TaskBoard() {
  // Updated to get updateTask and deleteTask as well.
  const { tasks, moveTask, addTask, updateTask, deleteTask } = useTaskStore();
  const [isCreating, setIsCreating] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const location = useLocation();
  const lastThreeTasks = tasks.slice(-3);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);
      moveTask(oldIndex, newIndex);
    }
  };

  return (
    <div className="space-y-4">
      {location.pathname === "/tasks" && (
        <button
          onClick={() => setIsCreating(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add New Task
        </button>
      )}

      {isCreating && (
        <div className="bg-white p-4 rounded shadow">
          <TaskForm
            onSubmit={(data) => {
              addTask(data);
              setIsCreating(false);
            }}
            onCancel={() => setIsCreating(false)}
          />
        </div>
      )}

      {/* Edit Task Form */}
      {editingTask && (
        <div className="bg-white p-4 rounded shadow">
          <TaskForm
            initialData={editingTask}
            onSubmit={(data) => {
              updateTask(editingTask.id, data);
              setEditingTask(null);
            }}
            onCancel={() => setEditingTask(null)}
          />
        </div>
      )}

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={lastThreeTasks} strategy={verticalListSortingStrategy}>
          <div className="bg-white p-4 rounded shadow">
            {lastThreeTasks.map((task) => (
              <TaskItem 
                key={task.id} 
                task={task} 
                onStatusChange={(id, status) => {
                  // Add your status change logic here
                  console.log(id, status);
                }}
                onEdit={(task) => setEditingTask(task)}
                onDelete={(id) => deleteTask(id)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}