import { StateScheme } from 'app/providers/StoreProvider';
import { Currency } from 'shared/consts/common';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm test', () => {
	test('should return value', () => {
		const data = {
			username: 'admin',
			lastname: 'lastname',
			age: 24,
			city: 'asda',
			currency: Currency.EUR,
		};
		const state = {
			profile: {
				form: data,
			},
		};
		expect(getProfileForm(state as StateScheme)).toEqual(data);
	});
	test('should work with empty string', () => {
		const state = {};
		expect(getProfileForm(state as StateScheme)).toEqual(undefined);
	});
});
