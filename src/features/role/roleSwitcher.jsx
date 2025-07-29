import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchRole } from './roleSlice';
import { Users, User } from 'lucide-react';

const RoleSwitcher = () => {
  const dispatch = useDispatch();
  const currentRole = useSelector((state) => state.role.currentRole);

  const handleRoleSwitch = (role) => {
    dispatch(switchRole(role));
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
      <button
        onClick={() => handleRoleSwitch('lead')}
        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
          currentRole === 'lead'
            ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        <Users size={16} />
        <span>Team Lead</span>
      </button>
      <button
        onClick={() => handleRoleSwitch('member')}
        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
          currentRole === 'member'
            ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        <User size={16} />
        <span>Team Member</span>
      </button>
    </div>
  );
};

export default RoleSwitcher;