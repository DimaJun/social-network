import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthStateSchema } from '../types/auth';

const initialState: AuthStateSchema = {
	access_token: null,
	user: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<AuthStateSchema>) => {
			state.access_token = action.payload.access_token;
			state.user = action.payload.user;
		},
		logout: (state) => {
			state.access_token = null;
			state.user = null;
		},
	},
});

export const { reducer: authSliceReducer } = authSlice;
export const { actions: authSliceActions } = authSlice;
