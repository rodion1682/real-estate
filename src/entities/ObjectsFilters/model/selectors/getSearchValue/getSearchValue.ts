import { StateScheme } from 'app/providers/StoreProvider';

export const getSearchValue = (state: StateScheme) =>
	state.objectsFilters.search;
