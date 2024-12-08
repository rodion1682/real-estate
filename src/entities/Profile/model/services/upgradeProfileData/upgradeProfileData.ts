import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileType } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
	ProfileType,
	void,
	ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
	const { extra, rejectWithValue, getState } = thunkApi;

	const formData = getProfileForm(getState());

	try {
		const response = await extra.api.put<ProfileType>('/profile', formData);

		return response.data;
	} catch (e) {
		console.log(e);
		return rejectWithValue('error');
	}
});
