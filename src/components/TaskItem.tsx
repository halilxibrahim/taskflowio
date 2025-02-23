// src/components/TaskItem.tsx
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from 'react';
import { useTaskStore } from "../store/taskStore";
import TaskForm from './TaskForm';

const priorityColors = {
  LOW: 'bg-gradient-to-r from-green-100 to-green-200 border-green-300',
  MEDIUM: 'bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-300',
  HIGH: 'bg-gradient-to-r from-red-100 to-red-200 border-red-300'
};

export default function TaskItem({ 
  task, 
  onStatusChange 
}: { 
  task: { 
    id: string; 
    title: string; 
    status: string; 
    priority: 'LOW' | 'MEDIUM' | 'HIGH';
    description?: string;
  };
  onStatusChange: (id: string, status: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });
  const [isEditing, setIsEditing] = useState(false);
  const { updateTask, deleteTask } = useTaskStore();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  if (isEditing) {
    return (
      <div ref={setNodeRef} style={style} className="p-6 my-3 backdrop-blur-sm bg-white/90 rounded-xl shadow-lg border border-gray-100">
        <TaskForm
          initialData={task}
          onSubmit={(data) => {
            updateTask(task.id, data);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${priorityColors[task.priority]} p-5 my-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border`}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing"
      >
        <div className="flex justify-between items-start">
          <h4 className="font-semibold text-gray-800">{task.title}</h4>
          <span className="text-xs px-3 py-1 rounded-full bg-white/70 font-medium text-gray-700">
            {task.priority}
          </span>
        </div>
      </div>
      {task.description && (
        <p className="text-sm mt-3 text-gray-600 leading-relaxed">{task.description}</p>
      )}
      <div className="mt-4 flex justify-between items-center">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          className="bg-white/70 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-200 hover:bg-white transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <option value="TODO">To Do</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
            className="px-3 py-1.5 text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-md hover:shadow-blue-500/25 transition-all duration-200"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(task.id);
            }}
            className="px-3 py-1.5 text-sm bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-md hover:shadow-red-500/25 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
