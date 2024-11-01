import ApartmentPage from 'pages/ApartmentPage/ApartmentPage';
import { ApartmentPageAsync } from 'pages/ApartmentPage/ApartmentPageAsync';
import MainPage from 'pages/MainPage/MainPage';
import { MainPageAsync } from 'pages/MainPage/MainPageAsync';
import NotFound from 'pages/NotFound/NotFound';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
	MAIN = 'main',
	APARTMENT = 'apartment',
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.APARTMENT]: '/apartment',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPageAsync />,
	},
	[AppRoutes.APARTMENT]: {
		path: RoutePath.apartment,
		element: <ApartmentPageAsync />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFound />,
	},
};
