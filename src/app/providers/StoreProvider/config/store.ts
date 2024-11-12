import { counterReducer } from 'entities/Counter';
import { StateScheme } from './StateScheme';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateScheme) {
	const rootReducers: ReducersMapObject<StateScheme> = {
		counter: counterReducer,
		user: userReducer,
	};

	return configureStore<StateScheme>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
