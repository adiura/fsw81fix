import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';
// import btnLeft from '../assets/image/LeftButton.svg';
// import btnRight from '../assets/image/RightButton.svg';
import imgCarousel from '../assets/img/img-banner.png';

function Carousel() {
	return (
		<div id="carouselExampleControlsNoTouching" className="carousel slide m-3" data-bs-touch="false" data-bs-interval="false">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={imgCarousel} className="d-block w-75" alt="..." />
				</div>
				<div className="carousel-item">
					<img src={imgCarousel} className="d-block w-75" alt="..." />
				</div>
				<div className="carousel-item">
					<img src={imgCarousel} className="d-block w-75" alt="..." />
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
				<span className="" aria-hidden="true">
					<i className="fa-solid fa-angle-left text-dark"></i>
				</span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
				<span className="" aria-hidden="true">
					<i className="fa-solid fa-angle-right text-dark"></i>
				</span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}

export default Carousel;
