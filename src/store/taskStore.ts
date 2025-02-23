import { create } from "zustand";

interface Task {
  id: string;
  title: string;
}

interface TaskStore {
  tasks: Task[];
  moveTask: (from: number, to: number) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    { id: "1", title: "Task 1" },
    { id: "2", title: "Task 2" },
    { id: "3", title: "Task 3" },
  ],
  moveTask: (from, to) =>
    set((state) => {
      const updatedTasks = [...state.tasks];
      const [movedTask] = updatedTasks.splice(from, 1);
      updatedTasks.splice(to, 0, movedTask);
      return { tasks: updatedTasks };
    }),
}));
