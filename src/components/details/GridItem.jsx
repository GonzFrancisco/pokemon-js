const isArray = (value) => {
	return Array.isArray(value);
};

export default function GridItem({ title, value, unit }) {
	return (
		<div className="">
			<h4 className="text-lg font-medium pb-1">{title}</h4>
			{isArray(value) ? (
				<ul>
					{value.map((ability) => (
						<li key={ability.ability.name}>{ability.ability.name}</li>
					))}
				</ul>
			) : (
				<p>
					{value} {unit}
				</p>
			)}
		</div>
	);
}
