import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Global.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavbarBottom = (props) => {
	return (
		<div className="bottom">
			<Navbar className="fixed-bottom shadow-lg">
				<Nav className="m-auto">
					<Nav.Link href="/">
						<a className="Iconn" href="#/" style={{ margin: 10, padding: 10 }}>
							{' '}
							<HomeIcon />
						</a>
					</Nav.Link>
					<Nav.Link href="/MobileNotif">
						<a className="Iconn" href="#/" style={{ margin: 10, padding: 10 }}>
							{' '}
							<NotificationsIcon />
						</a>
					</Nav.Link>
					<Nav.Link href="/update/product">
						<a className="Iconn" href="#/" style={{ margin: 10, padding: 10 }}>
							{' '}
							<AddCircleOutlineIcon />
						</a>
					</Nav.Link>
					<Nav.Link href="/DaftarProduct">
						<a className="Iconn" href="#/" style={{ margin: 10, padding: 10 }}>
							{' '}
							<FormatListBulletedIcon />
						</a>
					</Nav.Link>
					<Nav.Link href="/AkunSaya">
						<a className="Iconn" href="#/" style={{ margin: 10, padding: 10 }}>
							{' '}
							<AccountCircleIcon />
						</a>
					</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};
export default NavbarBottom;
