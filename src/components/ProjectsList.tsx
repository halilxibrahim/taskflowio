import { ChartBarIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  name: string;
  progress: number;
}

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
        <ChartBarIcon className="h-6 w-6 text-blue-600" />
      </div>
      <div className="space-y-4">
        {projects.map(project => (
          <div key={project.id} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">{project.name}</span>
              <span className="text-sm font-medium">{project.progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
