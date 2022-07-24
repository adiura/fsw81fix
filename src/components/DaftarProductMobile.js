import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';

const DaftarProductMobile = (props) => {
	const { namaButton, linkHref, type } = props;

	return (
		<a className="btn btnDaftarProductmobile " type={type} href={linkHref}>
			{namaButton}
		</a>
	);
};

export default DaftarProductMobile;