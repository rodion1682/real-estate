import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileScheme, ProfileType } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/upgradeProfileData/upgradeProfileData';

const initialState: ProfileScheme = {
	readonly: true,
	isLoading: false,
	error: undefined,
	data: undefined,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		cancelEdit: (state) => {
			state.readonly = true;
			console.log('before', state.form);
			state.form = state.data;
			console.log('after', state.form);
		},
		upgradeProfile: (state, action: PayloadAction<ProfileType>) => {
			state.form = {
				...state.form,
				...action.payload,
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchProfileData.fulfilled,
				(state, action: PayloadAction<ProfileType>) => {
					state.isLoading = false;
					state.data = action.payload;
					state.form = action.payload;
				}
			)
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				updateProfileData.fulfilled,
				(state, action: PayloadAction<ProfileType>) => {
					state.isLoading = false;
					state.data = action.payload;
					state.form = action.payload;
				}
			)
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
