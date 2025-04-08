import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	// Övning 4
	// const [visitors, setVisitors] = useState([]);
	// const url = 'https://santosnr6.github.io/Data/attendees.json';
	// useEffect(() => {
	// 	axios
	// 		.get(url)
	// 		.then((response) => setVisitors(response.data))
	// 		.catch((error) => console.log(error));
	// }, []);
	// return (
	// 	<div>
	//     {/* Övning 4 */}
	// 		{/* {visitors
	// 			.filter(
	// 				(visitor) =>
	// 					visitor.attending && visitor.allergies.length > 0
	// 			)
	// 			.map((visitor) => (
	// 				<p>{visitor.name}</p>
	// 			))} */}
	// 	</div>
	// );

	// Övning 5
	const [pokemons, setPokemons] = useState([]);
	const url = 'https://santosnr6.github.io/Data/pokemons2.json';

	const [pokemon, setPokemon] = useState(null);
	const [pokemonUrl, setPokemonUrl] = useState('');
	const [foundPokemon, setFoundPokemon] = useState(null);

	useEffect(() => {
		axios
			.get(url)
			.then((response) => setPokemons(response.data))
			.catch((error) => console.log(error));
	}, []);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const searchInput = e.target.elements.inputs.value.toLowerCase();
		const searchPokemon = pokemons.find(
			(pokemon) => pokemon.name.toLowerCase() === searchInput
		);

		if (searchPokemon) {
			console.log('asd');

			setPokemon(searchPokemon);
		} else {
			console.log(`Det fanns inget ${searchInput}`);
			setPokemon(null);
			setPokemonUrl('');
		}
	};

	useEffect(() => {
		if (pokemon) {
			setPokemonUrl(pokemon.url);
		}
	}, [pokemon]);

	useEffect(() => {
		if (pokemonUrl) {
			axios
				.get(pokemonUrl)
				.then((response) => setFoundPokemon(response.data));
		}
	}, [pokemonUrl]);

	if (foundPokemon) {
		console.log(foundPokemon);
	}
	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<label>
					{' '}
					Sök efter ditt pokemon:
					<input type='text' name='inputs' />
				</label>
				<button>Sök</button>
			</form>
			{foundPokemon && <p>{foundPokemon.name}</p>}
		</div>
	);
}

export default App;
