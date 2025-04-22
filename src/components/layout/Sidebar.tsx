
import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Plus } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="hidden md:block md:col-span-3 lg:col-span-2">
      <div className="rounded-lg bg-white overflow-hidden border border-gray-200 mb-4">
        <div className="h-14 bg-gradient-to-r from-linkedin-blue to-linkedin-lightBlue"></div>
        <div className="text-center -mt-8 px-4 pb-4">
          <div className="rounded-full w-16 h-16 border-2 border-white bg-gray-200 mx-auto flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-400">JD</span>
          </div>
          <Link to="/profile" className="block mt-2 font-semibold text-lg text-linkedin-text hover:underline">
            John Doe
          </Link>
          <p className="text-gray-500 text-sm mt-1">
            Software Engineer at Tech Company
          </p>
          <div className="border-t border-gray-200 mt-4 pt-3">
            <div className="flex justify-between text-sm">
              <div className="text-left">
                <p className="text-gray-500">Who's viewed your profile</p>
                <p className="font-semibold text-linkedin-blue">38</p>
              </div>
              <div className="text-left">
                <p className="text-gray-500">Impressions of your post</p>
                <p className="font-semibold text-linkedin-blue">428</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
          <Link to="/premium" className="text-sm font-medium text-gray-500 hover:text-linkedin-blue">
            Access exclusive tools & insights
          </Link>
        </div>
        <div className="flex items-center px-4 py-2 border-t border-gray-200">
          <Bookmark size={16} className="text-gray-500 mr-2" />
          <Link to="/items" className="text-sm font-medium text-gray-500 hover:text-linkedin-blue">
            My items
          </Link>
        </div>
      </div>

      <div className="rounded-lg bg-white border border-gray-200 overflow-hidden">
        <div className="px-4 py-3">
          <h2 className="text-sm font-medium text-gray-500">Recent</h2>
          <ul className="mt-2 space-y-2">
            {['JavaScript Developers', 'React Enthusiasts', 'UI/UX Design', 'Tech Leadership', 'Product Management'].map((group, index) => (
              <li key={index}>
                <Link to="#" className="flex items-center text-sm text-gray-700 hover:text-linkedin-blue hover:bg-gray-50 -mx-4 px-4 py-1">
                  <span className="mr-2">#</span>
                  {group}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 py-3 border-t border-gray-200">
          <h2 className="text-sm font-medium text-linkedin-blue">Groups</h2>
          <div className="mt-2">
            <Link to="/groups" className="flex items-center text-sm text-gray-700 hover:text-linkedin-blue">
              <span>See all groups</span>
            </Link>
          </div>
        </div>
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-medium text-linkedin-blue">Events</h2>
            <Plus size={16} className="text-gray-700" />
          </div>
        </div>
        <div className="px-4 py-3 border-t border-gray-200">
          <h2 className="text-sm font-medium text-linkedin-blue">Followed Hashtags</h2>
          <ul className="mt-2 space-y-2">
            {['career', 'technology', 'programming', 'design', 'startup'].map((tag, index) => (
              <li key={index}>
                <Link to="#" className="flex items-center text-sm text-gray-700 hover:text-linkedin-blue hover:bg-gray-50 -mx-4 px-4 py-1">
                  <span className="mr-2">#</span>
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
          <Link to="/discover-more" className="text-sm font-medium text-gray-500 hover:text-linkedin-blue flex justify-center">
            Discover more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
