import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { PatternFilter } from '@/lib/patterns/registry';

interface PatternsState {
  activeFilter: PatternFilter;
}

const initialState: PatternsState = {
  activeFilter: 'all',
};

const patternsSlice = createSlice({
  name: 'patterns',
  initialState,
  reducers: {
    setActiveFilter(state, action: PayloadAction<PatternFilter>) {
      state.activeFilter = action.payload;
    },
  },
});

export const { setActiveFilter } = patternsSlice.actions;
export default patternsSlice.reducer;
