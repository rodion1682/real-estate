import { StateScheme } from 'app/providers/StoreProvider';

export const getObjectType = (state: StateScheme) =>
	state.objectsFilters.objectType;
