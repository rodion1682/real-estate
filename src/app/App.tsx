import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const App = () => {
	const { theme } = useTheme();
	const dispatch = useDispatch();
	document.body.className = theme;

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames('app', {}, [])}>
			<Suspense fallback="">
				<Navbar />
				<div className="app__content-page">
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
