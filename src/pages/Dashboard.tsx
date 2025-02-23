import { useState } from 'react';
import TaskBoard from '../components/TaskBoard';
import ProjectsList from '../components/ProjectsList';
import PeopleList from '../components/PeopleList';
import Notepad from '../components/Notepad';
import { HiOutlineUsers, HiOutlineClipboardList, HiOutlineClock, HiOutlineLightningBolt } from 'react-icons/hi';

export default function Dashboard() {
  const [isDark, setIsDark] = useState(false);
  
  const stats = [
    { title: 'Active Projects', value: '12', icon: HiOutlineClipboardList, color: 'bg-purple-500' },
    { title: 'Team Members', value: '24', icon: HiOutlineUsers, color: 'bg-blue-500' },
    { title: 'Hours Logged', value: '164', icon: HiOutlineClock, color: 'bg-green-500' },
    { title: 'Tasks Completed', value: '38', icon: HiOutlineLightningBolt, color: 'bg-yellow-500' }
  ];

  const projects = [
    { id: 1, name: 'Mobile App', progress: 75 },
    { id: 2, name: 'Website Redesign', progress: 40 },
  ];

  const people = [
    { id: 1, name: 'Alex Smith', role: 'Developer' },
    { id: 2, name: 'Sarah Johnson', role: 'Designer' },
  ];

  return (
    <div className={`min-h-screen px-20 transition-colors duration-200`}>
      <div className="w-full max-w-7xl">
        <div className="flex justify-between items-center mb-6 pt-4">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Dashboard</h2>
        </div>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <TaskBoard isDark={isDark} />
          </div>
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <ProjectsList projects={projects} isDark={isDark} />
          </div>
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <PeopleList people={people} isDark={isDark} />
          </div>
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <Notepad isDark={isDark} />
          </div>
        </div>
      </div>
    </div>
  );
}
