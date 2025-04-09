import { useLocalStorageBookmarks } from '../../hooks/useLocalStorageBookmark';
import Button from '../Button/Button';
import './bookDetails.css';

function BookDetails({ book }) {
	const { bookmarks, addBookmark, removeBookmark } =
		useLocalStorageBookmarks();

	// Kontroll om boken är markerad och finns i LocalStorage
	const isBookmarked = (book) => {
		if (bookmarks.some((b) => b.id === book.id)) return true;
		else return false;
	};

	return (
		<article className='details'>
			<div className='details__title'>
				<h2 className='details__title'>{book.title}</h2>
				<h3 className='details__author'>{book.author}</h3>
			</div>
			<p className='details__description'>{book.plot}</p>
			<div className='details__info'>
				<p className='details__text'>
					<span className='details__text--bold'>Audience: </span>
					{book.audience}
				</p>
				<p className='details__text'>
					<span className='details__text--bold'>
						First Published:{' '}
					</span>
					{book.year}
				</p>
				<p className='details__text'>
					<span className='details__text--bold'>Pages: </span>
					{book.pages}
				</p>
				<p className='details__text'>
					<span className='details__text--bold'>Publisher: </span>
					{book.publisher}
				</p>
			</div>
			{isBookmarked(book) ? (
				<Button
					onClick={() => removeBookmark(book.id)}
					text='Read it, loved it!'
				/>
			) : (
				<Button
					onClick={() => addBookmark(book)}
					text='Oh, I want to read it!'
				/>
			)}
		</article>
	);
}

export default BookDetails;
