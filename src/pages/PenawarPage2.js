import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavbarPlain from '../components/NavbarPlain';
import { ArrowLeft } from 'react-bootstrap-icons';
import CardPenawar from '../components/CardPenawar';
import BtnMdPurple from '../components/ButtonMedium';
import BtnLgPurple from '../components/ButtonLarge';
import BtnMdSecondary from '../components/BtnMdSecondary';
import Modal from 'react-bootstrap/Modal';
import imgPenawar from '../assets/img/img-penawar.png';
import imgProduct from '../assets/img/product.png';
import Form from 'react-bootstrap/Form';
import { Radio, RadioGroup } from 'react-radio-group';

function ModalCenter(props) {
	return (
		<>
			<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body style={{ marginLeft: '5%', marginRight: '5%' }}>
					<h6>
						{' '}
						<b>Perbarui status penjualan produkmu</b>{' '}
					</h6>
					{/* modal status*/}
					<div>
						<Form style={{ paddingTop: '6%' }}>
							<RadioGroup name="transaksi" onChange={(e) => this.handleOnChange(e)}>
								<div className="radio-button-background">
									<Radio value="Berhasil" className="radioButton" /> <b>Berhasil terjual</b>
								</div>
								<p className="mt-2 mb-4 ms-3 text-muted">Kamu telah sepakat menjual produk ini kepada pembeli</p>
								<div className="radio-button-background">
									<Radio value="Batal" className="radioButton" /> <b>Batalkan transaksi</b>
								</div>
								<p className="mt-2 mb-4 ms-3 text-muted">Kamu membatalkan transaksi produk ini dengan pembeli</p>
							</RadioGroup>
						</Form>
					</div>
				</Modal.Body>
				<Modal.Footer className="d-flex justify-content-center">
					<BtnLgPurple namaButton="Kirim" linkHref="" />
				</Modal.Footer>
			</Modal>
		</>
	);
}

const PenawarPage2 = () => {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<>
			<NavbarPlain judulPage="Info Penawar" />

			<div className="container mt-4">
				<a className="iconArrowLeft" href="/">
					<ArrowLeft size={34} />
				</a>
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<CardPenawar imgPenawar={imgPenawar} nameBuyer="Nama Buyer" cityBuyer="Kota Surabaya" />
						<p className="fw-bold mt-5 mb-4">Daftar Produkmu yang ditawar</p>
						{/* list tawaran */}
						<div className="row">
							<div className="col-auto">
								<img className="img-tawaran" src={imgProduct} alt="iconProduct" />
							</div>
							<div className="col-auto">
								<div className="row-col">
									<div className="title-card-tawaran">Penawaran Produk</div>
									<div className="text-card-tawaran">Jam Tangan Casio</div>
									<div className="text-card-tawaran">Rp. 250.000</div>
									<div className="text-card-tawaran">Ditawar Rp. 200.000</div>
								</div>
							</div>
							<div className="col-auto ms-auto jam-card-tawaran">20 Apr, 14:04</div>
						</div>
						{/* button */}
						<div className="col mt-3">
							<BtnMdSecondary namaButton="Status" onClick={() => setModalShow(true)} />
							<BtnMdPurple namaButton="Hubungi di WhatsApp" />
							<ModalCenter show={modalShow} onHide={() => setModalShow(false)} />
						</div>
						<hr className="m-4"></hr>
					</div>
				</div>
				<div className="row"></div>
			</div>
		</>
	);
};

export default PenawarPage2;
