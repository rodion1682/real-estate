import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ObjectsFiltersScheme } from '../types/objectsFiltersScheme';

const initialState: ObjectsFiltersScheme = {
	dealType: {
		sale: true,
		rent: false,
	},
	objectType: {
		apartaments: true,
		house: false,
	},
	search: '',
	price: {
		from: 0,
		to: 0,
	},
	area: {
		from: 0,
		to: 0,
	},
};

export const objectsFiltersSlice = createSlice({
	name: 'objectsFilters',
	initialState,
	reducers: {
		setFilters: (state, action: PayloadAction<ObjectsFiltersScheme>) => {
			return { ...state, ...action.payload };
		},
	},
});

export const { actions: objectsFiltersActions } = objectsFiltersSlice;
export const { reducer: objectsFiltersReducer } = objectsFiltersSlice;
