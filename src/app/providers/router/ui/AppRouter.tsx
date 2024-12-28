import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	AppRoutesProps,
	profileRouteConfig,
	routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const elementItem = (
			<Suspense fallback={<PageLoader />}>{route.element}</Suspense>
		);

		if (route.path === routeConfig.profile.path) {
			return (
				<Route
					key={route.path}
					path={route.path}
					element={<RequireAuth>{elementItem}</RequireAuth>}
				>
					{Object.values(profileRouteConfig).map(({ path, element }) => (
						<Route
							key={path}
							path={path}
							element={<RequireAuth>{element}</RequireAuth>}
						/>
					))}
				</Route>
			);
		} else {
			return (
				<Route key={route.path} path={route.path} element={elementItem} />
			);
		}
	}, []);
	return (
		<>
			<Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
		</>
	);
});
