import React from 'react';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';
import Navbar from 'react-bootstrap/Navbar';
import logoSc from '../assets/img/logo2.png';
import Container from 'react-bootstrap/Container';
import { ArrowLeft } from 'react-bootstrap-icons';

const NavbarPlain = (props) => {
	const { judulPage } = props;

	return (
		<Navbar expand="lg" variant="light" bg="light" sticky="top" className="nav-top">
			<Container>
				<img src={logoSc} id="logoNavbar" alt="" className="nav-logo" />

				<div className="iconArrowLeftNav ">
					<ArrowLeft size={28} className="" href="/" />
				</div>

				<h6 className="navbarPlainTitle">{judulPage}</h6>
			</Container>
		</Navbar>
	);
};

export default NavbarPlain;
