import { configureStore } from '@reduxjs/toolkit';
import roleReducer from '../features/role/roleSlice';
import membersReducer from '../features/team/memberSlice';
import uiReducer from '../features/ui/uiSlice';

export const store = configureStore({
  reducer: {
    role: roleReducer,
    members: membersReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});