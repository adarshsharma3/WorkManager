import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleMembers } from '../selectors';
import MemberCard from './MemberCard';
import { Users } from 'lucide-react';

const MemberList = () => {
  const visibleMembers = useSelector(selectVisibleMembers);

  if (visibleMembers.length === 0) {
    return (
      <div className="text-center py-12">
        <Users size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No team members found
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {visibleMembers.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default MemberList;