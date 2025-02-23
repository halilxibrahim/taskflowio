import { Link } from 'react-router-dom';
import { Home, CheckSquare, Inbox, MessageSquare, BarChart2, Pencil } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="w-64 bg-white min-h-screen p-4">
      <div className="mb-8">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600 p-4">TaskflowIO</h1>
        </Link>
      </div>
      <nav className="space-y-2">
        <Link
          to="/"
          className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Home size={20} />
          <span>Home</span>
        </Link>

        <Link
          to="/tasks"
          className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <CheckSquare size={20} />
          <span>My Tasks</span>
        </Link>

        <Link
          to="/inbox"
          className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Inbox size={20} />
          <span>Inbox</span>
        </Link>

        <Link
          to="/messages"
          className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <MessageSquare size={20} />
          <span>Message</span>
        </Link>

        <Link
          to="/analytics"
          className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <BarChart2 size={20} />
          <span>Analytics</span>
        </Link>

        <Link
          to="/projects"
          className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <BarChart2 size={20} />
          <span>Projects</span>
        </Link>

        <Link
          to="/people"
          className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <span>People</span>
        </Link>

        <Link
          to="/notes"
          className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Pencil size={20} />
          <span>Notes</span>
        </Link>

        <div className="pt-6">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500">PROJECTS</div>
          <Link
            to="/projects/yellow-branding"
            className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="w-4 h-4 rounded-sm bg-blue-600"></div>
            <span>Yellow Branding</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;