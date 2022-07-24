import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';

function Category() {
	return (
		<div>
			<div>
				<p className="fw-bold">Telusuri Kategori</p>
			</div>
			<div className="d-flex justify-content-between category-list">
				<button className="btn btn-primary btn-primary-purple">
					<i className="fa-solid fa-magnifying-glass"></i>
					<span className="ms-2 fw-light">Semua</span>
				</button>
				<button className="btn btn-secondary text-dark">
					<i className="fa-solid fa-magnifying-glass"></i>
					<span className="ms-2 fw-light">Hobi</span>
				</button>
				<button className="btn btn-secondary text-dark">
					<i className="fa-solid fa-magnifying-glass"></i>
					<span className="ms-2 fw-light">Kendaraan</span>
				</button>
				<button className="btn btn-secondary text-dark">
					<i className="fa-solid fa-magnifying-glass"></i>
					<span className="ms-2 fw-light">Baju</span>
				</button>
				<button className="btn btn-secondary text-dark">
					<i className="fa-solid fa-magnifying-glass"></i>
					<span className="ms-2 fw-light">Elektronik</span>
				</button>
				<button className="btn btn-secondary text-dark">
					<i className="fa-solid fa-magnifying-glass"></i>
					<span className="ms-2 fw-light">Kesehatan</span>
				</button>
			</div>
		</div>
	);
}

export default Category;
