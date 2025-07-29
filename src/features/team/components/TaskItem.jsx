import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTaskProgress, deleteTask } from '../membersSlice';
import ProgressBar from '../../../components/ProgressBar';
import Button from '../../../components/Button';
import { Calendar, Minus, Plus, Trash2, CheckCircle } from 'lucide-react';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleProgressChange = (change) => {
    const newProgress = Math.max(0, Math.min(100, task.progress + change));
    dispatch(updateTaskProgress({
      taskId: task.id,
      progress: newProgress
    }));
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task.id));
    }
  };

  const isOverdue = new Date(task.dueDate) < new Date() && !task.isCompleted;
  const dueToday = new Date(task.dueDate).toDateString() === new Date().toDateString();

  return (
    <div className={`p-4 rounded-lg border-2 transition-all duration-200 ${
      task.isCompleted 
        ? 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/10 dark:border-emerald-800'
        : isOverdue
        ? 'bg-red-50 border-red-200 dark:bg-red-900/10 dark:border-red-800'
        : dueToday
        ? 'bg-orange-50 border-orange-200 dark:bg-orange-900/10 dark:border-orange-800'
        : 'bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className={`font-medium ${
            task.isCompleted 
              ? 'text-emerald-800 dark:text-emerald-400 line-through' 
              : 'text-gray-900 dark:text-white'
          }`}>
            {task.title}
          </h4>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
            <Calendar size={14} className="mr-1" />
            <span className={`${
              isOverdue ? 'text-red-600 dark:text-red-400 font-medium' : 
              dueToday ? 'text-orange-600 dark:text-orange-400 font-medium' : ''
            }`}>
              Due: {new Date(task.dueDate).toLocaleDateString()}
              {isOverdue && ' (Overdue)'}
              {dueToday && ' (Due Today)'}
            </span>
          </div>
        </div>

        {task.isCompleted && (
          <CheckCircle size={20} className="text-emerald-600 dark:text-emerald-400 ml-2" />
        )}
      </div>

      <ProgressBar progress={task.progress} className="mb-4" />

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => handleProgressChange(-10)}
            disabled={task.progress <= 0 || task.isCompleted}
          >
            <Minus size={14} />
          </Button>
          
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-[60px] text-center">
            {task.progress}%
          </span>
          
          <Button
            size="sm"
            variant="secondary"
            onClick={() => handleProgressChange(10)}
            disabled={task.progress >= 100 || task.isCompleted}
          >
            <Plus size={14} />
          </Button>
        </div>

        <Button
          size="sm"
          variant="danger"
          onClick={handleDelete}
        >
          <Trash2 size={14} />
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;