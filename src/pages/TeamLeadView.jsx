import React from 'react';
import StatusSummary from '../features/team/components/StatusSummary';
import MemberControls from '../features/team/components/MemberControls';
import MemberList from '../features/team/components/MemberList';
import TaskForm from '../features/team/components/TaskForm';
import StatusPieChart from '../features/team/components/StatusPieChart';

const TeamLeadView = () => {
  return (
    <div className="space-y-6">
      {/* Status Overview */}
      <StatusSummary />
      
      {/* Charts and Task Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusPieChart />
        <TaskForm />
      </div>
      
      {/* Member Controls */}
      <MemberControls />
      
      {/* Member List */}
      <MemberList />
    </div>
  );
};

export default TeamLeadView;