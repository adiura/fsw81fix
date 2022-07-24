import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import imgProduct from '../assets/img/product.png';
import imgSeller from '../assets/img/seller.png';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import NavbarNotification from '../components/NavbarNotification';
import ButtonLargePurple from "../components/ButtonLarge";
import BtnLgSecondary from "../components/BtnLgSecondary";

function HalamanProdukSeller() {
  return (
		<>
			{/* navbar */}
			<NavbarNotification />

			{/* produk */}
			<Container>
				<div class="row mt-4">
					<div class="col-lg-8">
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src={imgProduct} alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={imgProduct} alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={imgProduct} alt="Third slide" />
							</Carousel.Item>
						</Carousel>
					</div>
					{/* COL KE 2 */}
					<div class="col-lg-4">
						<div class="textShadowBox p-4">
							<h4>Jam Tangan Casio</h4>
							<h6 className="text-muted">Aksesoris</h6>
							<h5>Rp 250.000</h5>

							<div className="mt-4 mb-3">
								<ButtonLargePurple namaButton="Terbitkan" type="submit" />
							</div>
							<div>
								<BtnLgSecondary namaButton="Edit" type="submit" />
							</div>
						</div>
						<div className="cardproduct textShadowBox p-4 mt-4">
							<div className="d-flex flex-row align-items-center">
								<div className="">
									<img className="img-penawar rounded-4 col-3" src={imgSeller} alt="" />
								</div>
								<div className="ms-3">
									<div className="row-col">
										<div className="fw-bold">Nama Penjual</div>
										<div className="city-penawar">Kota</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* TEXT DESCRIPSI */}
				<div class="row">
					<div class="col-lg-8">
						<div class="textShadowBox p-4 mt-4 mb-4">
							<h5 className="fw-bold">Deskripsi</h5>
							<div className="text-muted mt-4" align="justify">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								<br></br>
								<br></br>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}

export default HalamanProdukSeller;