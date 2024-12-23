import { userEvent } from '@storybook/test';
import { Counter } from './Counter';
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';

describe('Counter', () => {
	test('test render', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});

		expect(screen.getByTestId('value-title')).toHaveTextContent('10');
	});

	test('increment', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 11 } },
		});
		userEvent.click(screen.getByTestId('increment-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('11');
	});

	test('decrement', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 9 } },
		});
		userEvent.click(screen.getByTestId('decrement-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('9');
	});
});
