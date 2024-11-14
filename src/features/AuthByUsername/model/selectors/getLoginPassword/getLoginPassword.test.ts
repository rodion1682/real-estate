import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginError test', () => {
	test('should return value', () => {
		const state = {
			loginForm: {
				password: '123',
			},
		};
		expect(getLoginPassword(state as StateScheme)).toEqual('123');
	});
	test('should work with empty string', () => {
		const state = {};
		expect(getLoginPassword(state as StateScheme)).toEqual('');
	});
});
