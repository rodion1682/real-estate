import { StateScheme } from 'app/providers/StoreProvider';

export const getDealType = (state: StateScheme) =>
	state.objectsFilters.dealType;
