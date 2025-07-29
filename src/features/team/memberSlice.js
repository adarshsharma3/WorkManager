import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Async thunk for fetching team data
export const fetchTeamData = createAsyncThunk(
  'members/fetchTeamData',
  async () => {
    const response = await fetch('https://randomuser.me/api/?results=8');
    const data = await response.json();
    
    const members = {};
    const memberIds = [];
    const tasks = {};
    
    const statuses = ['Working', 'Break', 'Meeting', 'Offline'];
    
    data.results.forEach((user, index) => {
      const memberId = `user-${index + 1}`;
      memberIds.push(memberId);
      
      members[memberId] = {
        id: memberId,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        avatar: user.picture.large,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        joinDate: new Date(user.registered.date).toISOString().split('T')[0],
      };
      
      // Generate 2-4 random tasks for each member
      const taskCount = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < taskCount; i++) {
        const taskId = uuidv4();
        const taskTitles = [
          'Complete project documentation',
          'Review code changes',
          'Update dashboard metrics',
          'Client meeting preparation',
          'Bug fix implementation',
          'Feature testing',
          'Database optimization',
          'UI/UX improvements'
        ];
        
        tasks[taskId] = {
          id: taskId,
          title: taskTitles[Math.floor(Math.random() * taskTitles.length)],
          dueDate: new Date(Date.now() + (Math.floor(Math.random() * 14) + 1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          progress: Math.floor(Math.random() * 101),
          memberId: memberId,
          isCompleted: Math.random() > 0.7,
          createdAt: new Date().toISOString(),
        };
      }
    });
    
    return { members, memberIds, tasks };
  }
);

const initialState = {
  ids: [],
  entities: {},
  tasks: {},
  status: 'idle',
  error: null,
  lastActivity: {},
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    updateMemberStatus: (state, action) => {
      const { memberId, status } = action.payload;
      if (state.entities[memberId]) {
        state.entities[memberId].status = status;
        state.lastActivity[memberId] = new Date().toISOString();
      }
    },
    addTask: (state, action) => {
      const task = {
        ...action.payload,
        id: action.payload.id || uuidv4(),
        createdAt: new Date().toISOString(),
        progress: 0,
        isCompleted: false,
      };
      state.tasks[task.id] = task;
    },
    updateTaskProgress: (state, action) => {
      const { taskId, progress } = action.payload;
      if (state.tasks[taskId]) {
        state.tasks[taskId].progress = Math.max(0, Math.min(100, progress));
        state.tasks[taskId].isCompleted = progress >= 100;
      }
    },
    deleteTask: (state, action) => {
      delete state.tasks[action.payload];
    },
    updateLastActivity: (state, action) => {
      const { memberId } = action.payload;
      state.lastActivity[memberId] = new Date().toISOString();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTeamData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entities = action.payload.members;
        state.ids = action.payload.memberIds;
        state.tasks = action.payload.tasks;
        
        // Initialize last activity for all members
        action.payload.memberIds.forEach(id => {
          state.lastActivity[id] = new Date().toISOString();
        });
      })
      .addCase(fetchTeamData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { 
  updateMemberStatus, 
  addTask, 
  updateTaskProgress, 
  deleteTask,
  updateLastActivity 
} = membersSlice.actions;

export default membersSlice.reducer;