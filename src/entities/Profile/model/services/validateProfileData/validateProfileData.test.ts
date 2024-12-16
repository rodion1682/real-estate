import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';
import { Currency } from 'shared/consts/common';

const data = {
	username: 'admin',
	first: 'ageasd',
	lastname: 'dfgsdf',
	age: 24,
	city: 'asda',
	currency: Currency.EUR,
};

describe('validateProfileData.test', () => {
	test('success', async () => {
		const result = validateProfileData(data);
		console.log('success', result);

		expect(result).toEqual([]);
	});

	test('without first and last name', async () => {
		const result = validateProfileData({ ...data, first: '', lastname: '' });
		console.log('without first and last name', result);
		expect(result).toEqual([ValidateProfileError.INCORECT_USER_DATA]);
	});

	test('incorrect age', async () => {
		const result = validateProfileData({ ...data, age: undefined });
		console.log('incorrect age', result);
		expect(result).toEqual([ValidateProfileError.INCORECT_AGE]);
	});

	test('incorrect city', async () => {
		const result = validateProfileData({ ...data, city: undefined });
		console.log('incorrect city', result);

		expect(result).toEqual([ValidateProfileError.INCORECT_CITY]);
	});

	test('incorrect all', async () => {
		const result = validateProfileData({});
		console.log('incorrect all', result);

		expect(result).toEqual([
			ValidateProfileError.INCORECT_USER_DATA,
			ValidateProfileError.INCORECT_AGE,
			ValidateProfileError.INCORECT_CITY,
		]);
	});
});
