import React from 'react';
import StatusSummary from '../featuresRedux/team/components/StatusSummary';
import MemberControls from '../featuresRedux/team/components/MemberControls';
import MemberList from '../featuresRedux/team/components/MemberList';
import TaskForm from '../featuresRedux/team/components/TaskForm';
import StatusPieChart from '../featuresRedux/team/components/StatusPieChart';

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