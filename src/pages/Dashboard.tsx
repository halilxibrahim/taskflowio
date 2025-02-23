import TaskBoard from '../components/TaskBoard';
import ProjectsList from '../components/ProjectsList';
import PeopleList from '../components/PeopleList';
import Notepad from '../components/Notepad';

export default function Dashboard() {
  const projects = [
    { id: 1, name: 'Mobile App', progress: 75 },
    { id: 2, name: 'Website Redesign', progress: 40 },
  ];

  const people = [
    { id: 1, name: 'Alex Smith', role: 'Developer' },
    { id: 2, name: 'Sarah Johnson', role: 'Designer' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        <TaskBoard />
        <ProjectsList projects={projects} />
        <PeopleList people={people} />
        <Notepad />
      </div>
    </div>
  );
}
