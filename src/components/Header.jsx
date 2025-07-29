import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/team/selectors';
import RoleSwitcher from '../features/role/RoleSwitcher';
import ThemeToggle from './ThemeToggle';
import { Activity } from 'lucide-react';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentRole = useSelector((state) => state.role.currentRole);

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Activity size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Team Pulse Dashboard
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <RoleSwitcher />
          
          {currentUser && (
            <div className="flex items-center space-x-3">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {currentUser.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {currentRole}
                </p>
              </div>
            </div>
          )}
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;