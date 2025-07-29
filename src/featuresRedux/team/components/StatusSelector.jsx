import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMemberStatus } from '../memberSlice';
import { selectCurrentUser } from '../selectors';
import Card from '../../../components/Card';
import { Users, Coffee, Clock, UserX } from 'lucide-react';

const StatusSelector = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const statuses = [
    { name: 'Working', icon: Users, color: 'emerald' },
    { name: 'Break', icon: Coffee, color: 'orange' },
    { name: 'Meeting', icon: Clock, color: 'blue' },
    { name: 'Offline', icon: UserX, color: 'gray' },
  ];

  const handleStatusChange = (status) => {
    if (currentUser) {
      dispatch(updateMemberStatus({
        memberId: currentUser.id,
        status: status
      }));
    }
  };

  const getColorClasses = (color, isActive) => {
    const colorMap = {
      emerald: isActive 
        ? 'bg-emerald-600 text-white shadow-lg' 
        : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-emerald-900/40',
      orange: isActive 
        ? 'bg-orange-600 text-white shadow-lg' 
        : 'bg-orange-50 text-orange-600 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-400 dark:hover:bg-orange-900/40',
      blue: isActive 
        ? 'bg-blue-600 text-white shadow-lg' 
        : 'bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/40',
      gray: isActive 
        ? 'bg-gray-600 text-white shadow-lg' 
        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-900/20 dark:text-gray-400 dark:hover:bg-gray-900/40',
    };
    return colorMap[color];
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Update Your Status
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Current status: <span className="font-medium">{currentUser?.status}</span>
      </p>
      
      <div className="grid grid-cols-2 gap-3">
        {statuses.map(({ name, icon: Icon, color }) => {
          const isActive = currentUser?.status === name;
          return (
            <button
              key={name}
              onClick={() => handleStatusChange(name)}
              className={`p-4 rounded-lg transition-all duration-200 ${getColorClasses(color, isActive)}`}
            >
              <Icon size={24} className="mx-auto mb-2" />
              <div className="text-sm font-medium">{name}</div>
            </button>
          );
        })}
      </div>
    </Card>
  );
};

export default StatusSelector;