import {
	AnyAction,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { ObjectsFiltersScheme } from 'entities/ObjectsFilters';

import { ProfileScheme } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateScheme {
	counter: CounterSchema;
	user: UserSchema;
	loginForm?: LoginSchema;
	profile?: ProfileScheme;
	objectsFilters: ObjectsFiltersScheme;
}

export type StateSchemeKey = keyof StateScheme;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateScheme>;
	reduce: (state: StateScheme, action: AnyAction) => StateScheme;
	add: (key: StateSchemeKey, reducer: Reducer) => void;
	remove: (key: StateSchemeKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateScheme;
}
