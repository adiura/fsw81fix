import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';
import Form from 'react-bootstrap/Form';
import coverSecondHand from '../assets/img/coverSecondHand.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SecondHand from '../assets/img/SecondHand.svg';
import ButtonLargePurple from '../components/ButtonLarge';

function LoginPage() {
	return (
		<>
			<Container fluid>
				<Row>
					<Col md={6}>
						<div id="overlay">
							<img src={SecondHand} alt="" id="secondHand" />
							<img src={coverSecondHand} alt="" id="imgRegister" />
						</div>
					</Col>

					<Col md={6} className="mt-lg-5">
						<Container className="loginText">
							<h3 className="mb-lg-4">
								<b>Masuk</b>
							</h3>
							<Form>
								<Form.Group className="mb-3 mt-4">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" id="email" placeholder="Contoh: johndee@gmail.com" className="formRounded" required />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" id="password" placeholder="Masukan password" className="formRounded" required />
								</Form.Group>
								<ButtonLargePurple namaButton="Masuk" type="submit" value="submit" linkHref="" />
								<p className="mt-2 pt-4 mb-0 txtRegister">
									Belum punya akun?
									<a href="/register" className="btnLinkPurp fw-bold">
										{' '}
										Daftar di sini
									</a>
								</p>
							</Form>
						</Container>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default LoginPage;

// <buttonLargePurple namaButton="Test"/>
