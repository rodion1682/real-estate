import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileType } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
	ProfileType,
	void,
	ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
	const { extra, rejectWithValue } = thunkApi;
	try {
		const response = await extra.api.get<ProfileType>('/profile');
		return response.data;
	} catch (e) {
		console.log(e);
		return rejectWithValue('error');
	}
});
