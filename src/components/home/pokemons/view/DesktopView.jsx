export default function DesktopView({ children }) {
	return (
		<div className="container px-4 md:px-6 2xl:px-16 pt-4 pb-20 mx-auto flex flex-wrap gap-6 justify-center">
			{children}
		</div>
	);
}
