import { StoryFn } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: Partial<ReducersMapObject<StateScheme>> = {
	loginForm: loginReducer,
	profile: profileReducer,
};

export const StoreDecorator = (
	state: Partial<StateScheme>,
	asyncReducers?: Partial<ReducersMapObject<StateScheme>>
) => {
	return (StoryComponent: StoryFn) => {
		return (
			<StoreProvider
				initialState={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				<StoryComponent />
			</StoreProvider>
		);
	};
};
