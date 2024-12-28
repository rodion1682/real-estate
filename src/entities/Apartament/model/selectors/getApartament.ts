import { StateScheme } from 'app/providers/StoreProvider';

export const getApartamentData = (state: StateScheme) => state.apartament?.data;
export const getApartamentIsLoading = (state: StateScheme) =>
	state.apartament?.isLoading || false;
export const getApartamentError = (state: StateScheme) =>
	state.apartament?.error;
