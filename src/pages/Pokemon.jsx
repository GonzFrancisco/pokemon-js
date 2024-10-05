import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetails from '../components/details/PokemonDetails';
import Logo from '../components/shared/logo/Logo';
import { Skeleton } from '../components/shared/skeleton/Skeleton';

const Pokemon = () => {
	const { slug } = useParams();
	const [data, setPokemonList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPokemonDetails = async () => {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${slug}`
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

	if (error) return <p className="text-center">{error.message}</p>;

	return (
		<main className="flex h-fit justify-between">
			<div className="bg-side" />
			<div className="">
				<Logo />
				{!loading && data && <PokemonDetails pokemon={data} />}
			</div>
			<div className="bg-side" />
		</main>
	);
};

export default Pokemon;
