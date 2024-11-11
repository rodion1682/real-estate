import { counterReducer } from 'entities/Counter';
import { StateScheme } from './StateScheme';
import { configureStore } from '@reduxjs/toolkit';

export function createReduxStore(initialState?: StateScheme) {
	return configureStore<StateScheme>({
		reducer: {
			counter: counterReducer,
		},
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
