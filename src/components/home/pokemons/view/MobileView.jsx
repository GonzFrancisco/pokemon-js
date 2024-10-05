import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function MobileView({ children }) {
	const settings = {
		variableWidth: true,
		adaptiveHeight: true,
		arrows: true,
		dots: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 2,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="py-10">
			<Slider className="min-h-[300px]" {...settings}>
				{children}
			</Slider>
		</div>
	);
}
