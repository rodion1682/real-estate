import { counterReducer } from 'entities/Counter';
import { StateScheme } from './StateScheme';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore(initialState?: StateScheme) {
	const rootReducers: ReducersMapObject<StateScheme> = {
		counter: counterReducer,
		user: userReducer,
		loginForm: loginReducer,
	};

	return configureStore<StateScheme>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
