import Pokemons from '../components/home/pokemons/Pokemons';
import Logo from '../components/shared/logo/Logo';

export default function Home() {
	return (
		<section className="bg-hero w-full overflow-x-hidden h-auto min-h-screen">
			<div className="bg-hero-texture">
				<Logo />
				<Pokemons />
			</div>
		</section>
	);
}
