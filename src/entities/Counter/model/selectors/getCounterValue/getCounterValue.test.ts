import { StateScheme } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
	test('should return value', () => {
		const state: Partial<StateScheme> = {
			counter: { value: 10 },
		};
		expect(getCounterValue(state as StateScheme)).toEqual(10);
	});
});
