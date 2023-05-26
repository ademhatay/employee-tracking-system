import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
	user: object | null;
	isLoading: boolean;
	appErr: string | undefined;
	serverErr: string | undefined;
}

const initialState: UserState = {
	user: null,
	isLoading: false,
	appErr: undefined,
	serverErr: undefined,
};

export const loginUser = createAsyncThunk(
	'users/login',
	async (userData: { email: string; password: string }) => {
		const response = await axios.post(
			'http://localhost:5000/api/users/login',
			userData
		);
		// save user data to local storage with token
		localStorage.setItem('auth', JSON.stringify(response.data));
		return response.data;
	}
);


export const logoutUser = createAsyncThunk('users/logout', async () => {
	// remove user data from local storage
	localStorage.removeItem('auth');
	return null;
});


// if in local storage, get user data
const auth = localStorage.getItem('auth');

const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: auth ? JSON.parse(auth) : null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state: any, action) => {
			state.loading = true;
			state.appErr = undefined;
			state.serverErr = undefined;
		});
		builder.addCase(loginUser.fulfilled, (state: any, action) => {
			state.user = action?.payload;
			state.loading = false;
			state.appErr = undefined;
			state.serverErr = undefined;
		});
		builder.addCase(loginUser.rejected, (state: any, action: any) => {
			state.appErr = action?.payload?.message;
			state.serverErr = action?.error?.message;
			state.loading = false;
		});

		// logout user
		builder.addCase(logoutUser.pending, (state: any, action) => {
			state.loading = true;
			state.appErr = undefined;
			state.serverErr = undefined;
		});

		builder.addCase(logoutUser.fulfilled, (state: any, action) => {
			state.user = null;
			state.loading = false;
			state.appErr = undefined;
			state.serverErr = undefined;
		});

		builder.addCase(logoutUser.rejected, (state: any, action: any) => {
			state.appErr = action?.payload?.message;
			state.serverErr = action?.error?.message;
			state.loading = false;
		});
	},
});

export default userSlice.reducer;
