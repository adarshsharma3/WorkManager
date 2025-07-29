import React from 'react';
import { useSelector } from 'react-redux';
import { selectMemberTasks, selectCurrentUser } from '../selectors';
import TaskItem from './TaskItem';
import Card from '../../../components/Card';
import { CheckCircle } from 'lucide-react';

const MyTasksList = () => {
  const currentUser = useSelector(selectCurrentUser);
  const myTasks = useSelector(state => selectMemberTasks(state, currentUser?.id));

  const activeTasks = myTasks.filter(task => !task.isCompleted);
  const completedTasks = myTasks.filter(task => task.isCompleted);

  return (
    <div className="space-y-6">
      {/* Active Tasks */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Active Tasks ({activeTasks.length})
        </h3>
        
        {activeTasks.length === 0 ? (
          <div className="text-center py-8">
            <CheckCircle size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              No active tasks. Great job!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {activeTasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        )}
      </Card>

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Completed Tasks ({completedTasks.length})
          </h3>
          <div className="space-y-3">
            {completedTasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default MyTasksList;