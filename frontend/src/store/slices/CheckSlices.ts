import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CheckInOut {
	id: number;
	user_id: number;
	check_in: string;
	check_out: string;
}

interface CheckState {
	checkInOut: CheckInOut[];
	loading: boolean;
	error: string | null;
}

const initialState: CheckState = {
	checkInOut: [],
	loading: false,
	error: null,
};

export const saveCheckInOut = createAsyncThunk(
	'check/saveCheckInOut',
	async (user_id: number) => {
		try {
			const response = await fetch(`http://localhost:5000/api/get`);
			const data = await response.json();
			return data.checkInOut;
		} catch (error) {
			throw new Error('Check-in/out getirme işlemi başarısız oldu.');
		}
	}
);

const checkSlice = createSlice({
	name: 'check',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(saveCheckInOut.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(saveCheckInOut.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.checkInOut = action.payload;
			})
			.addCase(saveCheckInOut.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Check-in/out kaydetme işlemi başarısız oldu.';
			});
	},
});

export default checkSlice.reducer;
