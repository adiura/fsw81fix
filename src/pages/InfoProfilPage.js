import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';
import Form from 'react-bootstrap/Form';
import BtnLgPurple from '../components/ButtonLarge';
import NavbarPlain from '../components/NavbarPlain';
import { ArrowLeft } from 'react-bootstrap-icons';
import Button from '@mui/material/Button';
import upfoto from '../assets/img/upfoto.svg';

function InfoProfilPage() {
	return (
		<>
			<NavbarPlain judulPage="Lengkapi Info Akun" />
			<div className="container mt-4">
				<a className="iconArrowLeft" href="/">
					<ArrowLeft size={34} className="" href="/" />
				</a>
				<div className="row">
					<div className="col-6 col-sm-12 col-md-8 offset-lg-2 offset-md-2">
						<Form>
							<Form.Group className="mb-3 mt-4 m-auto" id="formBasicProfilePhoto">
								<div className="text-center">
									<input
										className=""
										type="file"
										accept="image/*"
										style={{ display: 'none' }}
										id="contained-button-file"
										// onChange={this.imageHandler}
										// name="image-upload"
									/>
									<label className="" htmlFor="contained-button-file">
										<Button className="" component="span">
											<img src={upfoto} alt="upfoto" style={{ position: 'relative' }}></img>
										</Button>
									</label>
								</div>
							</Form.Group>

							<Form.Group className="mb-3 mt-4" id="formBasicName">
								<Form.Label>Nama</Form.Label>
								<Form.Control type="text" id="Name" placeholder="Nama" className="formRounded" required />
							</Form.Group>

							<Form.Group className="mb-3" id="formBasicCity">
								<Form.Label>Kota</Form.Label>
								<Form.Control type="text" id="kota" placeholder="Masukkan kota" className="formRounded" required />
							</Form.Group>

							<Form.Group className="mb-3" id="formBasicAddress">
								<Form.Label>Alamat</Form.Label>
								<Form.Control type="text" id="alamat" placeholder="Masukan alamat" className="formRounded inputLarge" required />
							</Form.Group>

							<Form.Group className="mb-3" id="formBasicHP">
								<Form.Label>Nomer Handphone</Form.Label>
								<Form.Control type="text" id="noHP" placeholder="Masukan no HP" className="formRounded" required />
							</Form.Group>
							<div className="mb-5">
								<BtnLgPurple namaButton="Simpan" />
							</div>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
}

export default InfoProfilPage;
