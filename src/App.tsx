import { Link } from 'react-router-dom';
import './styles/index.scss';
import { AppRouter } from './router/AppRouter';
import { RoutePath } from './router/routeConfig';
import { useTheme } from 'providers/ThemeProvider/useTheme';

const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Change theme</button>
			<Link to={RoutePath.main}>Main</Link>
			<Link to={RoutePath.apartment}>Apartament</Link>
			asdasddfsd
			<AppRouter />
		</div>
	);
};

export default App;
