import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginError test', () => {
	test('should return true', () => {
		const state = {
			loginForm: {
				isLoading: false,
			},
		};
		expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
	});
	test('should return false', () => {
		const state = {};
		expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
	});
});
