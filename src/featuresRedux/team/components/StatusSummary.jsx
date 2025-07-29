import React from 'react';
import { useSelector } from 'react-redux';
import { selectStatusCounts } from '../selectors';
import Card from '../../../components/Card';
import { Users, Clock, Coffee, UserX } from 'lucide-react';

const StatusSummary = () => {
  const statusCounts = useSelector(selectStatusCounts);
  
  const getStatusIcon = (status) => {
    const iconMap = {
      Working: Users,
      Break: Coffee,
      Meeting: Clock,
      Offline: UserX,
    };
    return iconMap[status] || Users;
  };
  
  const getStatusColor = (status) => {
    const colorMap = {
      Working: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20',
      Break: 'text-orange-600 bg-orange-50 dark:bg-orange-900/20',
      Meeting: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20',
      Offline: 'text-gray-600 bg-gray-50 dark:bg-gray-900/20',
    };
    return colorMap[status] || 'text-gray-600 bg-gray-50';
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Team Status Overview
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statusCounts.map(({ name, value }) => {
          const Icon = getStatusIcon(name);
          const colorClasses = getStatusColor(name);
          
          return (
            <div key={name} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${colorClasses} mb-2`}>
                <Icon size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default StatusSummary;