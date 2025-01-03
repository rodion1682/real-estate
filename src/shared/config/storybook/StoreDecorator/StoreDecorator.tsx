import { StoryFn } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { apartamentReducer } from 'entities/Apartament/model/slice/apartamentSlice';

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	apartament: apartamentReducer,
};

export const StoreDecorator = (
	state: DeepPartial<StateScheme>,
	asyncReducers?: ReducersList
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
