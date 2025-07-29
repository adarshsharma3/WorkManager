import { createSlice } from '@reduxjs/toolkit';

// Function to get the initial theme from localStorage or system preference
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  // If no saved theme, check system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};


const initialState = {
  statusFilter: 'All',
  sortKey: 'name',
  searchTerm: '',
  // Set the initial theme based on our function
  theme: getInitialTheme(),
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
    // This reducer remains the same, it just toggles the state
    toggleTheme: (state) => {
        console.log(`${state.theme}`)
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
