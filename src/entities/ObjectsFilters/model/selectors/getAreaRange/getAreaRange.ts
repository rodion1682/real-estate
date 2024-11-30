import { StateScheme } from 'app/providers/StoreProvider';

export const getAreaRange = (state: StateScheme) => state.objectsFilters.area;
