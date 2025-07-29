import React from 'react';
import { useSelector } from 'react-redux';
import { selectMemberTaskCounts } from '../selectors';
import Card from '../../../components/Card';
import { Mail, Calendar, CheckCircle, Clock } from 'lucide-react';

const MemberCard = ({ member }) => {
  const memberTaskCounts = useSelector(selectMemberTaskCounts);
  const taskStats = memberTaskCounts[member.id] || { total: 0, active: 0, completed: 0 };
  
  const getStatusColor = (status) => {
    const colorMap = {
      Working: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400',
      Break: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
      Meeting: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      Offline: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
    };
    return colorMap[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="p-6" hover>
      <div className="flex items-start space-x-4">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
              {member.name}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
              {member.status}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
            <Mail size={14} className="mr-1" />
            {member.email}
          </div>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Calendar size={14} className="mr-1" />
            Joined {new Date(member.joinDate).toLocaleDateString()}
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {taskStats.total}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Total Tasks</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-orange-600 dark:text-orange-400 flex items-center justify-center">
                <Clock size={16} className="mr-1" />
                {taskStats.active}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Active</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <CheckCircle size={16} className="mr-1" />
                {taskStats.completed}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Completed</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MemberCard;