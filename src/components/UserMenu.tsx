import { useState } from "react";
import { ArrowDown } from "lucide-react";

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <span className="text-white text-sm font-medium">CM</span>
        </div>
        <div className="hidden sm:block text-left">
          <p className="text-sm font-medium text-gray-900 ">Cesar Machado</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
        <ArrowDown
          size={16}
          className={`text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white  rounded-lg shadow-lg border border-gray-200  py-2 z-50">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50 "
          >
            Settings
          </a>
          <hr className="my-2 border-gray-200 " />
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-50"
          >
            Sign out
          </a>
        </div>
      )}
    </div>
  );
};
