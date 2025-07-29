import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/team/selectors';
import StatusSelector from '../features/team/components/StatusSelector';
import MyTasksList from '../features/team/components/MyTasksList';
import Card from '../components/Card';
import { User } from 'lucide-react';

const TeamMemberView = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="space-y-6">
      {/* User Profile Card */}
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          {currentUser?.avatar && (
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome back, {currentUser?.name}!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Here's your personal dashboard
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Status Selector */}
        <div className="lg:col-span-1">
          <StatusSelector />
        </div>
        
        {/* Tasks List */}
        <div className="lg:col-span-2">
          <MyTasksList />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberView;