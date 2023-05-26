import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slices/UserSlice';
import CheckSlices from './slices/CheckSlices';

const store = configureStore({
	reducer: {
		user: UserSlice,
		check: CheckSlices,
	},
});

export default store;