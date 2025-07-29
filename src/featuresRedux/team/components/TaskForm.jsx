import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllMembers } from '../selectors';
import { addTask } from '../memberSlice';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { Plus, User, Calendar, FileText } from 'lucide-react';

const TaskForm = () => {
  const dispatch = useDispatch();
  const members = useSelector(selectAllMembers);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    memberId: '',
    dueDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.memberId || !formData.dueDate) return;

    dispatch(addTask(formData));
    setFormData({ title: '', memberId: '', dueDate: '' });
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) {
    return (
      <div className="text-center">
        <Button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Assign New Task</span>
        </Button>
      </div>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Assign New Task
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <FileText size={16} className="mr-2" />
            Task Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task description..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <User size={16} className="mr-2" />
            Assign to
          </label>
          <select
            name="memberId"
            value={formData.memberId}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select team member</option>
            {members.map(member => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Calendar size={16} className="mr-2" />
            Due Date
          </label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex space-x-3">
          <Button type="submit" className="flex-1">
            Assign Task
          </Button>
          <Button 
            type="button" 
            variant="secondary" 
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TaskForm;