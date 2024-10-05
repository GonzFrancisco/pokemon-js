import { Link } from 'react-router-dom';
import logoImg from '../../../assets/images/logo.png';

export default function Logo() {
	return (
		<div className="mx-auto w-fit pt-8 pb-4">
			<Link to="/">
				<img
					src={logoImg}
					alt="Pokemon"
					width="260"
					height="100"
					className="w-auto h-16 md:h-24"
				/>
			</Link>
		</div>
	);
}
