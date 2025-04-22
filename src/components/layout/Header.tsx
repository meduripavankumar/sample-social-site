
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  BriefcaseIcon,
  MessageSquare, 
  Bell, 
  User,
  Search 
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-linkedin-blue font-bold text-3xl mr-6">
              in
            </Link>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 focus:outline-none focus:bg-white focus:border-linkedin-blue focus:ring-linkedin-blue sm:text-sm"
              />
            </div>
          </div>
          <nav className="flex space-x-1 md:space-x-4">
            <Link to="/" className="flex flex-col items-center px-1 md:px-3 py-2 text-xs md:text-sm font-medium text-gray-500 hover:text-linkedin-blue">
              <Home size={20} />
              <span className="hidden md:inline-block mt-1">Home</span>
            </Link>
            <Link to="/network" className="flex flex-col items-center px-1 md:px-3 py-2 text-xs md:text-sm font-medium text-gray-500 hover:text-linkedin-blue">
              <Users size={20} />
              <span className="hidden md:inline-block mt-1">Network</span>
            </Link>
            <Link to="/jobs" className="flex flex-col items-center px-1 md:px-3 py-2 text-xs md:text-sm font-medium text-gray-500 hover:text-linkedin-blue">
              <BriefcaseIcon size={20} />
              <span className="hidden md:inline-block mt-1">Jobs</span>
            </Link>
            <Link to="/messages" className="flex flex-col items-center px-1 md:px-3 py-2 text-xs md:text-sm font-medium text-gray-500 hover:text-linkedin-blue">
              <MessageSquare size={20} />
              <span className="hidden md:inline-block mt-1">Messages</span>
            </Link>
            <Link to="/notifications" className="flex flex-col items-center px-1 md:px-3 py-2 text-xs md:text-sm font-medium text-gray-500 hover:text-linkedin-blue">
              <Bell size={20} />
              <span className="hidden md:inline-block mt-1">Notifications</span>
            </Link>
            <Link to="/profile" className="flex flex-col items-center px-1 md:px-3 py-2 text-xs md:text-sm font-medium text-gray-500 hover:text-linkedin-blue">
              <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <User size={16} />
              </div>
              <span className="hidden md:inline-block mt-1">Me</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
