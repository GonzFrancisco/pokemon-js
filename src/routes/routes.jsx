import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/pokemon/:slug',
		element: <Pokemon />,
	},
]);

export default routes;
