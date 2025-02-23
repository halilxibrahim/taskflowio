import { CalendarIcon } from '@heroicons/react/24/outline';

export default function Notepad() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Notepad</h3>
        <CalendarIcon className="h-6 w-6 text-blue-600" />
      </div>
      <textarea
        className="w-full h-[150px] p-3 text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your notes here..."
      />
    </div>
  );
}
