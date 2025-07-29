import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeamData } from '../featuresRedux/team/memberSlice';
import TeamLeadView from './TeamLeadView';
import TeamMemberView from './TeamMemberView';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const currentRole = useSelector((state) => state.role.currentRole);
  const { status, error } = useSelector((state) => state.members);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTeamData());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 size={48} className="animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading team data...</p>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 dark:text-red-400 mb-4">
          <p className="text-lg font-medium">Failed to load team data</p>
          <p className="text-sm">{error}</p>
        </div>
        <button
          onClick={() => dispatch(fetchTeamData())}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {currentRole === 'lead' ? <TeamLeadView /> : <TeamMemberView />}
    </div>
  );
};

export default Dashboard;