import { createSelector } from 'reselect';

// Base selectors
const selectMembersEntities = (state) => state.members.entities;
const selectMemberIds = (state) => state.members.ids;
const selectTasks = (state) => state.members.tasks;
const selectStatusFilter = (state) => state.ui.statusFilter;
const selectSortKey = (state) => state.ui.sortKey;
const selectSearchTerm = (state) => state.ui.searchTerm;

// Get all members as array
export const selectAllMembers = createSelector(
  [selectMembersEntities, selectMemberIds],
  (entities, ids) => ids.map(id => entities[id])
);

// Get tasks count per member
export const selectMemberTaskCounts = createSelector(
  [selectTasks],
  (tasks) => {
    const taskCounts = {};
    Object.values(tasks).forEach(task => {
      if (!taskCounts[task.memberId]) {
        taskCounts[task.memberId] = { total: 0, active: 0, completed: 0 };
      }
      taskCounts[task.memberId].total++;
      if (task.isCompleted) {
        taskCounts[task.memberId].completed++;
      } else {
        taskCounts[task.memberId].active++;
      }
    });
    return taskCounts;
  }
);

// Get filtered and sorted members
export const selectVisibleMembers = createSelector(
  [selectAllMembers, selectStatusFilter, selectSortKey, selectSearchTerm, selectMemberTaskCounts],
  (members, statusFilter, sortKey, searchTerm, taskCounts) => {
    let filtered = members;
    
    // Apply status filter
    if (statusFilter !== 'All') {
      filtered = filtered.filter(member => member.status === statusFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      const aTaskCount = taskCounts[a.id] || { active: 0, total: 0 };
      const bTaskCount = taskCounts[b.id] || { active: 0, total: 0 };
      
      switch (sortKey) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'status':
          return a.status.localeCompare(b.status);
        case 'activeTasks':
          return bTaskCount.active - aTaskCount.active;
        case 'totalTasks':
          return bTaskCount.total - aTaskCount.total;
        default:
          return 0;
      }
    });
    
    return filtered;
  }
);

// Get status counts for pie chart
export const selectStatusCounts = createSelector(
  [selectAllMembers],
  (members) => {
    const counts = {};
    members.forEach(member => {
      counts[member.status] = (counts[member.status] || 0) + 1;
    });
    
    return Object.entries(counts).map(([status, count]) => ({
      name: status,
      value: count,
    }));
  }
);

// Get tasks for specific member
export const selectMemberTasks = createSelector(
  [selectTasks, (state, memberId) => memberId],
  (tasks, memberId) => {
    return Object.values(tasks).filter(task => task.memberId === memberId);
  }
);

// Get current user data
export const selectCurrentUser = createSelector(
  [selectMembersEntities, (state) => state.role.currentUser],
  (entities, currentUserId) => entities[currentUserId]
);