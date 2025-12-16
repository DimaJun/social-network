import { configureStore } from '@reduxjs/toolkit';

import { authSliceReducer } from '@/features/Authorization';
import { baseApi } from '@/shared/configs/api';

export const store = configureStore({
	reducer: {
		auth: authSliceReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
	devTools: true,
});
