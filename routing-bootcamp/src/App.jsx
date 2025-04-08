import axios from 'axios';
import { useState, useEffect } from 'react';
function App() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios
			.get('https://santosnr6.github.io/Data/childrens_books.json')
			.then((response) => setBooks(response.data))
			.catch((error) => console.log(error));
	}, []);

	if (books.length > 0) {
		console.log(books);
	}

	return <div>App</div>;
}

export default App;
