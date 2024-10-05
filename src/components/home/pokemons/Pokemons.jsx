import { useEffect, useState } from 'react';
import { Skeleton } from '../../shared/skeleton/Skeleton';
import PokemonCard from './PokemonCard';
import ViewDeterminer from './view/ViewDeterminer';

export default function Pokemons() {
	const [data, setPokemonList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPokemon = async () => {
			try {
				const response = await fetch(
					'https://pokeapi.co/api/v2/pokemon?limit=20'
				);

				const data = await response.json();

				setPokemonList(data);
			} catch (error) {
				console.error(error);
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchPokemon();
	}, []);

	if (loading) return <Skeleton />;

	if (error) return <p className="text-center">{error.message}</p>;

	return (
		<ViewDeterminer>
			{!loading &&
				data.results.length &&
				data.results.map((pokemon) => (
					<PokemonCard key={`pokemon-${pokemon.name}`} pokemon={pokemon} />
				))}
		</ViewDeterminer>
	);
}
