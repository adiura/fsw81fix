import React from 'react';
import LogoNavbar from '../assets/img/logo2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg nav-top">
			<div className="container">
				<button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse position-relative" id="navbarTogglerDemo01">
					<a className="btn btn-primary btn-masuk" role="button" href="/login">
						<i className="fa-solid fa-arrow-right-to-bracket"></i> <span className="ms-1">Masuk</span>
					</a>
					<a className="navbar-brand" href="/#">
						<div className="mt-sm-4 mt-lg-0">
							<img src={LogoNavbar} alt="logo" className="nav-logo" />
						</div>
					</a>
					<form className="d-flex position-relative" role="search">
						<input className="form-control nav-search" type="search" placeholder="Cari di sini ..." aria-label="Search" />
						<i className="fa-solid fa-magnifying-glass right-inner-addon"></i>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
