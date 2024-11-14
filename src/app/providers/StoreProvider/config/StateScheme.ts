import {
	AnyAction,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { ProfileScheme } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateScheme {
	counter: CounterSchema;
	user: UserSchema;
	loginForm?: LoginSchema;
	profile?: ProfileScheme;
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
