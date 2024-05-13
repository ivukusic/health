import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const INITIAL_STATE = {
  value: 0,
} satisfies CounterState as CounterState;

export const { actions: counterActions, reducer: counterReducer } = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});
