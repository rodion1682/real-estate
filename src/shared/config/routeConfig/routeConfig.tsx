import { MainPage } from 'pages/MainPage';
import { ApartmentPage } from 'pages/ApartmentPage';
import { NotFoundPage } from 'pages/NotFound';
import { RouteProps } from 'react-router-dom';
import { ProfilePage } from 'pages/ProfilePage';

export enum AppRoutes {
	MAIN = 'main',
	APARTMENT = 'apartment',
	PROFILE = 'profile',
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.APARTMENT]: '/apartment',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.APARTMENT]: {
		path: RoutePath.apartment,
		element: <ApartmentPage />,
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath.profile,
		element: <ProfilePage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
