import { Currency } from 'shared/consts/common';

export enum ValidateProfileError {
	INCORECT_USER_DATA = 'INCORECT_USER_DATA',
	INCORECT_AGE = 'INCORECT_AGE',
	INCORECT_CITY = 'INCORECT_CITY',
	NO_DATA = 'NO_DATA',
	SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileType {
	first?: string;
	lastname?: string;
	age?: number;
	currency?: Currency;
	city?: string;
	username?: string;
	avatar?: string;
}

export interface ProfileScheme {
	data?: ProfileType;
	form?: ProfileType;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
	validateErrors?: ValidateProfileError[];
}
