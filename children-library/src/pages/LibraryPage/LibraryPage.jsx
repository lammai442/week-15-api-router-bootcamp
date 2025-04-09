import { useFetch } from '../../hooks/useFetch';
import './libraryPage.css';
import BookList from '../../components/BookList/BookList';
import Icon from '../../components/Icon/Icon';

function LibraryPage() {
	const {
		data: books,
		isLoading,
		isError,
	} = useFetch('https://santosnr6.github.io/Data/childrens_books.json');

	if (isLoading)
		return (
			<section className='page'>
				<p>Loading...</p>
			</section>
		);
	if (isError)
		return (
			<section className='page'>
				<p>Error!</p>
			</section>
		);

	return (
		<section className='page library-page'>
			<div className='page__top'>
				<h1 className='page__title'>8 Classic Childrens Books</h1>
				<Icon path='/bookmarks' type='fa-book-bookmark' />
			</div>
			{books && <BookList books={books} />}
		</section>
	);
}

export default LibraryPage;
