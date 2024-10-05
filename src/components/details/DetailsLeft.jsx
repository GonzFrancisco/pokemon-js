import GridItem from './GridItem';

export default function DetailsLeft({
	name,
	short_description,
	height,
	weight,
	abilities,
	imgSrc,
}) {
	return (
		<div className="flex flex-col-reverse lg:flex-row w-full md:w-2/3 items-center justify-between">
			<div className="w-full lg:w-1/2 pr-6">
				<h1 className="text-[#257BC4] font-medium text-5xl text-center lg:text-left capitalize">
					{name}
				</h1>
				<p className="py-4 text-[#383838] text-justify">
					{short_description || (
						// generate a short description if not provided by name height and weight
						<span>
							<span className="capitalize">{name}</span> is a{' '}
							<span className="font-medium">{height}cm</span> tall and{' '}
							<span className="font-medium">{weight}kg</span> heavy pokemon with{' '}
							<span className="font-medium">{abilities.length}</span> abilities
						</span>
					)}
				</p>
				<div className="details-card bg-gradient-to-r to-[rgba(252,124,35,1)] from-[rgba(243,102,185,1)] p-1 rounded-lg mt-4 lg:mt-8 mb-4 max-w-xs mx-auto lg:mx-0">
					<div className="grid grid-cols-2 grid-rows-2 details-card rounded-lg bg-white p-4">
						<GridItem title="Height" value={height} unit="cm" />
						{/* <GridItem title="Category" value="Seed" /> */}
						<GridItem title="Weight" value={weight} unit="kg" />
						<GridItem title="Abilities" value={abilities} />
					</div>
				</div>
			</div>
			<div className="w-full lg:w-1/2 p-4 md:p-6 pb-28 lg:pb-0">
				<div className="before:pokemon_img relative w-full h-full mx-auto">
					<img
						src={imgSrc}
						alt={name}
						width={200}
						height={200}
						className="max-w-xs mx-auto w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
}
