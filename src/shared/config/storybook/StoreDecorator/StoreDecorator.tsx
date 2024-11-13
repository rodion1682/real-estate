import { StoryFn } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator =
	(state: Partial<StateScheme>) => (StoryComponent: StoryFn) =>
		(
			<StoreProvider initialState={state}>
				<StoryComponent />
			</StoreProvider>
		);
