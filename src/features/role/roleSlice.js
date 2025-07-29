import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentRole: 'lead', // 'lead' or 'member'
  currentUser: 'user-1', // ID of the current user
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    switchRole: (state, action) => {
      state.currentRole = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { switchRole, setCurrentUser } = roleSlice.actions;
export default roleSlice.reducer;