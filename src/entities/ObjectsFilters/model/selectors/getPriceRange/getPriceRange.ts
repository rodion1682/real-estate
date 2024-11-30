import { StateScheme } from 'app/providers/StoreProvider';

export const getPriceRange = (state: StateScheme) => state.objectsFilters.price;
