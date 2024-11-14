import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginError test', () => {
	test('should return value', () => {
		const state = {
			loginForm: {
				username: 'admin',
			},
		};
		expect(getLoginUsername(state as StateScheme)).toEqual('admin');
	});
	test('should work with empty string', () => {
		const state = {};
		expect(getLoginUsername(state as StateScheme)).toEqual('');
	});
});
