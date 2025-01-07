import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';
import { StateScheme } from 'app/providers/StoreProvider';
import { ApartamentCommentScheme } from '../types/ApartamentCommentScheme';
import { fetchCommentByApartamentId } from '../services/fetchCommentByApartamentId/fetchCommentByApartamentId';

const commentsAdapter = createEntityAdapter<Comment>({
	//@ts-ignore
	selectId: (comment: Comment) => comment.id,
});

export const getApartamentComments = commentsAdapter.getSelectors<StateScheme>(
	(state) => state.apartamentComments || commentsAdapter.getInitialState()
);

const apartamentCommentSlice = createSlice({
	name: 'apartamentCommentSlice',
	initialState: commentsAdapter.getInitialState<ApartamentCommentScheme>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentByApartamentId.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchCommentByApartamentId.fulfilled,
				(state, action: PayloadAction<Comment[]>) => {
					state.isLoading = false;
					commentsAdapter.setAll(state, action.payload);
				}
			)
			.addCase(fetchCommentByApartamentId.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: apartamentCommentsReducer } = apartamentCommentSlice;
