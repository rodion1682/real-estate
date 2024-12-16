import {
	profileActions,
	profileReducer,
	ProfileScheme,
	updateProfileData,
	ValidateProfileError,
} from 'entities/Profile';
import { Currency } from 'shared/consts/common';

const data = {
	username: 'admin',
	first: 'ageasd',
	lastname: 'dfgsdf',
	age: 24,
	city: 'asda',
	currency: Currency.EUR,
};

describe('profileSlice.test', () => {
	test('test set readonly', () => {
		const state: DeepPartial<ProfileScheme> = { readonly: false };
		expect(
			profileReducer(
				state as ProfileScheme,
				profileActions.setReadonly(true)
			)
		).toEqual({ readonly: true });
	});

	test('test cancel edit', () => {
		const state: DeepPartial<ProfileScheme> = {
			data,
			form: { username: '' },
		};

		expect(
			profileReducer(state as ProfileScheme, profileActions.cancelEdit())
		).toEqual({
			readonly: true,
			validateErrors: undefined,
			data,
			form: data,
		});
	});

	test('test update profile', () => {
		const state: DeepPartial<ProfileScheme> = { form: { username: '123' } };

		expect(
			profileReducer(
				state as ProfileScheme,
				profileActions.upgradeProfile({
					username: '123456',
				})
			)
		).toEqual({
			form: { username: '123456' },
		});
	});

	test('test update profile service pending', () => {
		const state: DeepPartial<ProfileScheme> = {
			isLoading: false,
			validateErrors: [ValidateProfileError.SERVER_ERROR],
		};

		expect(
			profileReducer(state as ProfileScheme, updateProfileData.pending(''))
		).toEqual({
			isLoading: true,
			validateErrors: undefined,
		});
	});

	test('test update profile service fullfiled', () => {
		const state: DeepPartial<ProfileScheme> = {
			isLoading: true,
		};

		expect(
			profileReducer(
				state as ProfileScheme,
				updateProfileData.fulfilled(data, '')
			)
		).toEqual({
			isLoading: false,
			validateErrors: undefined,
			readonly: true,
			validateError: undefined,
			form: data,
			data,
		});
	});
});
