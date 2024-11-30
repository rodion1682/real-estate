export interface ObjectsFiltersScheme {
	dealType?: {
		sale: boolean;
		rent: boolean;
	};
	objectType?: {
		apartaments: boolean;
		house: boolean;
	};
	search?: string;
	price?: {
		from: number;
		to: number;
	};
	area?: {
		from: number;
		to: number;
	};
}
