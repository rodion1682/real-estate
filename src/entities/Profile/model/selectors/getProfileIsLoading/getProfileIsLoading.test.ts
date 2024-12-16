import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading test', () => {
	test('should return value', () => {
		const state = {
			profile: {
				isLoading: true,
			},
		};
		expect(getProfileIsLoading(state as StateScheme)).toEqual(true);
	});
	test('should work with empty string', () => {
		const state = {};
		expect(getProfileIsLoading(state as StateScheme)).toEqual(undefined);
	});
});
