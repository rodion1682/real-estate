import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError test', () => {
	test('should return error', () => {
		const state = {
			loginForm: {
				error: 'error',
			},
		};
		expect(getLoginError(state as StateScheme)).toEqual('error');
	});
	test('should with empty state', () => {
		const state = {};
		expect(getLoginError(state as StateScheme)).toEqual(undefined);
	});
});
