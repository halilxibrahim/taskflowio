import { UserGroupIcon } from '@heroicons/react/24/outline';

interface Person {
  id: number;
  name: string;
  role: string;
}

export default function PeopleList({ people }: { people: Person[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">People</h3>
        <UserGroupIcon className="h-6 w-6 text-blue-600" />
      </div>
      <div className="space-y-3">
        {people.map(person => (
          <div key={person.id} className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-medium">
                {person.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{person.name}</p>
              <p className="text-xs text-gray-500">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
