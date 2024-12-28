import { Apartament } from './apartament';

export interface ApartamentScheme {
	isLoading: boolean;
	error?: string;
	data?: Apartament;
}
