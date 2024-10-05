import { ThemeProvider } from '@material-tailwind/react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

function App() {
	return (
		<>
			<ThemeProvider>
				<RouterProvider router={routes} />
			</ThemeProvider>
		</>
	);
}

export default App;
