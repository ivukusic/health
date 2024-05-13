import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  accessToken: string;
  user: User | null;
}

const INITIAL_STATE = {
  accessToken: '',
  user: null,
} satisfies AuthState as AuthState;

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    updateUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    updateAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
  },
});
