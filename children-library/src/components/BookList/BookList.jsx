import './bookList.css';
import Book from '../Book/Book';

function BookList({ books }) {
	return (
		<section className='page__list'>
			{books.map((book) => {
				return <Book book={book} key={book.id} />;
			})}
		</section>
	);
}

export default BookList;
