import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Apartament } from '../../types/apartament';

export const fetchApartamentById = createAsyncThunk<
	Apartament,
	string,
	ThunkConfig<string>
>('apartament/fetchApartamentById', async (apartamentId, thunkApi) => {
	const { extra, rejectWithValue } = thunkApi;
	try {
		const response = await extra.api.get<Apartament>(
			`/apartaments/${apartamentId}`
		);

		if (!response.data) {
			throw new Error();
		}
		return response.data;
	} catch (e) {
		console.log(e);
		return rejectWithValue('error');
	}
});
