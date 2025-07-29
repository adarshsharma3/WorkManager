import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statusFilter: 'All',
  sortKey: 'name',
  searchTerm: '',
  theme: 'light',
  sidebarCollapsed: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
    },
    setSortKey: (state, action) => {
      state.sortKey = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
  },
});

export const { 
  setStatusFilter, 
  setSortKey, 
  setSearchTerm, 
  toggleTheme, 
  setTheme,
  toggleSidebar 
} = uiSlice.actions;

export default uiSlice.reducer;