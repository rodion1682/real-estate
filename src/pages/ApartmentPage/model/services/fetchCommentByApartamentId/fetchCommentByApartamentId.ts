import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentByApartamentId = createAsyncThunk<
	Comment[],
	string | undefined,
	ThunkConfig<string>
>(
	'apartamentPage/fetchCommentByApartamentId',
	async (apartamentId, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi;

		if (!apartamentId) {
			return rejectWithValue('error');
		}

		try {
			const response = await extra.api.get<Comment[]>('/comments', {
				params: {
					apartamentId,
					_expand: 'user',
				},
			});

			if (!response.data) {
				throw new Error();
			}

			//console.log('response', response);

			return response.data;
		} catch (e) {
			return rejectWithValue('error');
		}
	}
);
