import { useEffect, useState } from 'react';
import DesktopView from './DesktopView';
import MobileView from './MobileView.jsx';

export default function ViewDeterminer({ children }) {
	const [width, setWidth] = useState(window.innerWidth);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	const isMobile = width <= 720;

	return (
		<>
			{isMobile ? (
				<MobileView>{children}</MobileView>
			) : (
				<DesktopView>{children}</DesktopView>
			)}
		</>
	);
}
