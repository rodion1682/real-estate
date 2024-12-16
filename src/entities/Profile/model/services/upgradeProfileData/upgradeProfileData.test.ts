import { Currency } from 'shared/consts/common';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './upgradeProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
	username: 'admin',
	first: 'ageasd',
	lastname: 'dfgsdf',
	age: 24,
	city: 'asda',
	currency: Currency.EUR,
};

describe('updateProfileData.test', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
			},
		});

		thunk.api.put.mockReturnValue(Promise.resolve({ data }));

		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data,
			},
		});
		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');

		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
	});

	test('validate error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: { ...data, lastname: '' },
			},
		});
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.INCORECT_USER_DATA]);
	});
});
