import { useState, useEffect } from 'react';

export const useLocalStorageBookmarks = () => {
	const [bookmarks, setBookmarks] = useState(() => {
		const stored = localStorage.getItem('bookmarks');
		return JSON.parse(stored) || [];
	});

	useEffect(() => {
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}, [bookmarks]);

	// Tar emot vår bok som man vill lägga in i bookmarks i LocalStorage. I useState så börjar den alltid med att kolla efter om det finns något i LocalStorage
	const addBookmark = (book) => {
		// Denna är som pushmetoden
		setBookmarks((prev) => [...prev, book]);
	};

	const removeBookmark = (id) => {
		// Det som är skiljt från ens ID sätts in i bookmarks
		setBookmarks((prev) => prev.filter((b) => b.id !== id));
	};

	return { bookmarks, addBookmark, removeBookmark };
};
