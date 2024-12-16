import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Currency } from 'shared/consts/common';

describe('getProfileData test', () => {
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
				data: data,
			},
		};
		expect(getProfileData(state as StateScheme)).toEqual(data);
	});
	test('should work with empty string', () => {
		const state = {};
		expect(getProfileData(state as StateScheme)).toEqual(undefined);
	});
});
