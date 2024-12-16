import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileType, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
	ProfileType,
	void,
	ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
	const { extra, rejectWithValue, getState } = thunkApi;

	const formData = getProfileForm(getState());
	const errors = validateProfileData(formData);

	if (errors.length) {
		return rejectWithValue(errors);
	}

	try {
		const response = await extra.api.put<ProfileType>('/profile', formData);

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		console.log(e);
		return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
	}
});
