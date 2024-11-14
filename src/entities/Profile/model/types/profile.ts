import { Currency } from 'shared/consts/common';

export interface ProfileType {
	first: string;
	lastname: string;
	age: number;
	currency: Currency;
	city: string;
	username: string;
	avatar: string;
}

export interface ProfileScheme {
	data?: ProfileType;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
}
