import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
	ReduxStoreWithManager,
	StateSchemeKey,
} from 'app/providers/StoreProvider/config/StateScheme';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
	[name in StateSchemeKey]?: Reducer;
};

type ReducersListEntry = [StateSchemeKey, Reducer];

interface DynamicModuleLoaderProps {
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
	children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
	const { children, reducers, removeAfterUnmount } = props;

	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(
					([name, reducer]: ReducersListEntry) => {
						store.reducerManager.remove(name);
						dispatch({ type: `@DESTROY ${name} reducer` });
					}
				);
			}
		};
		// eslint-disable-next-line
	}, []);

	return <>{children}</>;
};
