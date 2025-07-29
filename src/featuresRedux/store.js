import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './role/roleSlice';
import membersReducer from './team/memberSlice';
import uiReducer from './ui/uiSlice';

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