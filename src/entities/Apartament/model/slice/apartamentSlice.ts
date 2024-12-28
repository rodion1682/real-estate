import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApartamentScheme } from '../types/apartamentScheme';
import { fetchApartamentById } from '../services/fetchApartamentById/fetchApartamentById';
import { Apartament } from '../types/apartament';

const initialState: ApartamentScheme = {
	isLoading: false,
	error: undefined,
	data: undefined,
};

export const apartamentSlice = createSlice({
	name: 'apartament',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchApartamentById.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchApartamentById.fulfilled,
				(state, action: PayloadAction<Apartament>) => {
					state.isLoading = false;
					state.data = action.payload;
					state.error = undefined;
				}
			)
			.addCase(fetchApartamentById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: apartamentActions } = apartamentSlice;
export const { reducer: apartamentReducer } = apartamentSlice;
