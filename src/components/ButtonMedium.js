import React from "react";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';

const ButtonMediumPurple = (props) => {
  const { namaButton, linkHref, onClick, type, value } = props;

  return (
		<a href={linkHref}>
			<button className="btn btnPurpleMd" type={type} value={value} href={linkHref} onClick={onClick}>
				{namaButton}
			</button>
		</a>
	);
};

export default ButtonMediumPurple;