import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {
	profileRouteConfig,
	routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = memo(() => {
	const isAuth = useSelector(getUserAuthData);

	const routes = useMemo(() => {
		return Object.values(routeConfig).filter((route) => {
			if (route.authOnly && !isAuth) {
				return false;
			}
			return true;
		});
	}, [isAuth]);

	return (
		<>
			<Suspense fallback={<PageLoader />}>
				<Routes>
					{routes.map(({ path, element }) => {
						if (path === routeConfig.profile.path) {
							return (
								<Route key={path} path={path} element={element}>
									{Object.values(profileRouteConfig).map(
										({ path, element }) => (
											<Route
												key={path}
												path={path}
												element={element}
											/>
										)
									)}
								</Route>
							);
						} else {
							return <Route key={path} path={path} element={element} />;
						}
					})}
				</Routes>
			</Suspense>
		</>
	);
});
