import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import useTheme from './hooks/useTheme';
import useIdleTimer from './hooks/useIdleTimer';
import { useSelector, useDispatch } from 'react-redux';
import { updateMemberStatus } from './features/team/membersSlice';

const AppContent = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.role.currentUser);
  
  // Initialize theme
  useTheme();
  
  // Set up idle timer for automatic offline status
  useIdleTimer({
    onIdle: () => {
      if (currentUser) {
        dispatch(updateMemberStatus({
          memberId: currentUser,
          status: 'Offline'
        }));
      }
    },
    idleTime: 600000 // 10 minutes
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="px-6 py-8">
        <Dashboard />
      </main>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;