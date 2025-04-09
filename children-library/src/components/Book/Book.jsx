import './book.css';
import { Link } from 'react-router-dom';

function Book({ book, larger = false }) {
	return (
		<Link to={'/books/' + book.id} className='link book-link'>
			<article className='book' style={{ backgroundColor: book.color }}>
				<div className='book__spine'></div>
				<div
					className={
						larger
							? 'book__cover book__cover--larger'
							: 'book__cover'
					}>
					<h2
						className={
							larger
								? 'book__title book__title--larger'
								: 'book__title'
						}>
						{book.title}
					</h2>
					<h3
						className={
							larger
								? 'book__author book__author--larger'
								: 'book__author'
						}>
						{book.author}
					</h3>
				</div>
			</article>
		</Link>
	);
}

export default Book;
