import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';
import Form from 'react-bootstrap/Form';
import BtnMdPurple from '../components/ButtonMedium';
import BtnMdSecondary from '../components/BtnMdSecondary';
import NavbarPlain from '../components/NavbarPlain';
import { ArrowLeft } from 'react-bootstrap-icons';
import Button from '@mui/material/Button';
import up3 from '../assets/img/up3.svg';

function InfoProdukPage() {
	return (
		<>
			<NavbarPlain judulPage="Lengkapi Info Produk" />

			<div className="container mt-4">
				<a className="iconArrowLeft" href="/">
					<ArrowLeft size={34} className="" href="/" />
				</a>
				<div className="row">
					<div className="col-12 col-sm-12 col-md-8 offset-lg-2 offset-md-2">
						<Form>
							<Form.Group className="mb-3" controlId="formBasicProd">
								<Form.Label>Nama Produk</Form.Label>
								<Form.Control type="text" id="namaProduk" placeholder="Nama Produk" className="formRounded" required />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPrice">
								<Form.Label>Harga Produk</Form.Label>
								<Form.Control type="text" id="hargaProduk" placeholder="Rp 0.000" className="formRounded" required />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicCategory">
								<Form.Label>Kategori</Form.Label>
								<Form.Control type="text" id="kategoriProduk" placeholder="Pilih Kategori" className="formRounded" required />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicDesc">
								<Form.Label>Deskripsi</Form.Label>
								<Form.Control type="text" id="deskripsiProduk" placeholder="Tulis deskripsi produk" className="formRounded inputLarge" required />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicProductPhoto">
								<Form.Label>Foto Produk</Form.Label>
								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
									}}
								>
									<input
										type="file"
										accept="image/*"
										style={{ display: 'none' }}
										id="contained-button-file"
										// onChange={this.imageHandler}
										// name="image-upload"
									/>
									<label htmlFor="contained-button-file">
										<Button className="upfotoo" component="span">
											<img src={up3} alt="upfoto" style={{ position: 'relative'}}></img>
										</Button>
									</label>
								</div>
							</Form.Group>

							<div className='mb-5'>
								<BtnMdSecondary namaButton="Preview" />
								<BtnMdPurple namaButton="Terbitkan" />
							</div>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
}

export default InfoProdukPage;
