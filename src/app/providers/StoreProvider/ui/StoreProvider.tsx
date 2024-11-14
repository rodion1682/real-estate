import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateScheme } from '../config/StateScheme';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: Partial<StateScheme>;
	asyncReducers?: Partial<ReducersMapObject<StateScheme>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { children, initialState, asyncReducers } = props;
	const store = createReduxStore(
		initialState as StateScheme,
		asyncReducers as ReducersMapObject<StateScheme>
	);

	return <Provider store={store}>{children}</Provider>;
};
