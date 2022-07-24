import React from 'react';
import Navbar from '../components/Navbar.js';
import Card from '../components/Card.js';
import Carousel from '../components/Carousel.js';
import Category from '../components/Category.js';
import ButtonJual from '../components/ButtonJual.js';
import imgProduct from '../assets/img/product.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Homepage() {
	return (
		<div>
			<Navbar />
			<div className="container mt-lg-5">
				<Carousel />
			</div>
			<div className="container mt-lg-5">
				<Category />
			</div>
			<div className="container d-flex ">
				<div className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-lg-4 row-cols-md-2 g-3 mt-lg-2 mt-3 justify-content-center">
					{Array.from({ length: 8 }).map((_, idx) => (
						<Card imgProduct={imgProduct} nameProduct="Jam Tangan Casio" priceProduct="Rp. 250.000" typeProduct="Aksesoris" linkHref="/buyer/info/product" />
					))}
				</div>
			</div>
			<div className="container mt-lg-5 mb-lg-5">
				<ButtonJual type="submit" value="submit" nameButton="Jual" linkHref="/update/product" />
			</div>
		</div>
	);
}

export default Homepage;
