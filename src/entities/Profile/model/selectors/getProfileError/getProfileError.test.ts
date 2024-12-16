import { StateScheme } from 'app/providers/StoreProvider';
import { Currency } from 'shared/consts/common';
import { getProfileError } from './getProfileError';

describe('getProfileError test', () => {
	test('should return error', () => {
		const state = {
			profile: {
				error: '123',
			},
		};
		expect(getProfileError(state as StateScheme)).toEqual('123');
	});
	test('should work with empty string', () => {
		const state = {};
		expect(getProfileError(state as StateScheme)).toEqual(undefined);
	});
});
