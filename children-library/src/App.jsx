import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LibraryPage from './pages/LibraryPage/LibraryPage';
import SingleBookPage from './pages/SingleBookPage/SingleBookPage';
import BookmarksPage from './pages/BookmarksPage/BookmarksPage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <LibraryPage />,
		},
		{
			path: '/books/:id',
			element: <SingleBookPage />,
		},
		{
			path: '/bookmarks',
			element: <BookmarksPage />,
		},
	]);

	return (
		<div className='app'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
