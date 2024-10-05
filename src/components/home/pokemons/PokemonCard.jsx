import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Skeleton } from '../../shared/skeleton/Skeleton';

export default function PokemonCard({ pokemon }) {
	const [data, setPokemonList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPokemonDetails = async () => {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
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

		fetchPokemonDetails();
	}, []);

	if (loading) return <Skeleton />;

	// if (error) return <p className="text-center">{error.message}</p>;

	const imgSrc = data.sprites.other['official-artwork'].front_default;

	return (
		<Link to={`/pokemon/${pokemon.name}`} className="">
			<div className="character-card bg-white p-4 rounded-lg w-fit mx-2 md:mx-0">
				<div className="h-52 md:h-40 lg:h-44 xl:h-48 2xl:h-52 w-52 md:w-40 lg:w-44 xl:w-48 2xl:w-52 bg-[#f2f2f2] rounded-lg overflow-hidden relative p-8">
					<img
						src={imgSrc}
						alt={pokemon.name}
						width="100"
						height="100"
						className="w-full h-auto"
					/>
				</div>
				<h2 className="text-lg font-medium py-2 capitalize">{pokemon.name}</h2>
				<ul className="flex gap-2">
					<span className="hidden bg-poison bg-grass bg-water bg-bug bg-fire bg-water bg-flying bg-normal" />
					{!loading &&
						data.types.length &&
						data.types.map((type) => (
							<li
								key={type.type.name}
								className={`bg-${type.type.name} type-button capitalize`}
							>
								{type.type.name}
							</li>
						))}
				</ul>
			</div>
		</Link>
	);
}
