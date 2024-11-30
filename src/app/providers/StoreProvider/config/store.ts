import { counterReducer } from 'entities/Counter';
import { StateScheme, ThunkExtraArg } from './StateScheme';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { Reducer } from 'redux';
import { objectsFiltersReducer } from 'entities/ObjectsFilters';

export function createReduxStore(
	initialState?: StateScheme,
	asyncReducers?: ReducersMapObject<StateScheme>,
	navigate?: (to: To, options?: NavigateOptions) => void
) {
	const rootReducers: ReducersMapObject<StateScheme> = {
		counter: counterReducer,
		user: userReducer,
		objectsFilters: objectsFiltersReducer,
		...asyncReducers,
	};

	const reducerManager = createReducerManager(rootReducers);

	const extraArg: ThunkExtraArg = {
		api: $api,
		navigate,
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateScheme>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: { extraArgument: extraArg },
			}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
