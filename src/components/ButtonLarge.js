import React from 'react';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';

const ButtonLargePurple = (props) => {
	const { namaButton, linkHref, onClick, type, value } = props;

	return (
		<a href={linkHref}>
			<button className="btn btnPurpleLg" type={type} value={value} onClick={onClick}>
				{namaButton}
			</button>
		</a>
	);
};

export default ButtonLargePurple;

// <Button variant="primary" type="submit" href={linkHref} className="mt-4 btnPurpleLg">
//     {namaButton}
// </Button>
