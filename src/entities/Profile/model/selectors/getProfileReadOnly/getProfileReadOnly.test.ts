import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly test', () => {
	test('should return value', () => {
		const state = {
			profile: {
				readonly: true,
			},
		};
		expect(getProfileReadOnly(state as StateScheme)).toEqual(true);
	});
	test('should work with empty string', () => {
		const state = {};
		expect(getProfileReadOnly(state as StateScheme)).toEqual(undefined);
	});
});
