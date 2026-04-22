import { configureStore } from '@reduxjs/toolkit';

import patternsReducer from '@/features/patterns/patternsSlice';

export const store = configureStore({
  reducer: {
    patterns: patternsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
