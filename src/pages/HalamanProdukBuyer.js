import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import imgProduct from '../assets/img/product.png';
import imgSeller from '../assets/img/seller.png';
import NavbarNotification from '../components/NavbarNotification';
import ButtonLargePurple from '../components/ButtonLarge';

function MyVerticallyCenteredModal(props) {
	return (
		<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<h5 className="fw-bold">Masukan Harga tawarmu</h5>
				<p className="text-muted">Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
				{/* modal product */}
				<div
					style={{
						background: '#EEEEEE',
						boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
						borderRadius: '16px',
					}}
					classname=""
				>
					<div className="cardproduct p-4 mt-4">
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

				<div className="pt-4">
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Harga Tawar</Form.Label>
							<Form.Control className="ModalKotakTawar" type="text" placeholder="Rp 0,00" />
						</Form.Group>
						<ButtonLargePurple namaButton="Kirim" type="submit" onClick={props.onHide} />
					</Form>
				</div>
			</Modal.Body>
		</Modal>
	);
}

function SellHalamanProduk() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<>
			{/* NAVBAR */}
			<NavbarNotification />

			{/* PRODUCT */}
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

							<div className="mt-4">
								<ButtonLargePurple namaButton="Saya tertarik dan ingin nego" onClick={() => setModalShow(true)} />
							</div>

							<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
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

export default SellHalamanProduk;
