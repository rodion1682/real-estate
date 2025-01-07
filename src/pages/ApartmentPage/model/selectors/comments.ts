import { StateScheme } from 'app/providers/StoreProvider';

export const getApartamentCommentsIsLoading = (state: StateScheme) =>
	state.apartamentComments?.isLoading;
export const getApartamentCommentsError = (state: StateScheme) =>
	state.apartamentComments?.error;
