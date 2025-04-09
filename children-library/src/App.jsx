import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LibraryPage from './pages/LibraryPage/LibraryPage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <LibraryPage />,
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
