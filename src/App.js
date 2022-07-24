import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import InfoProfilPage from './pages/InfoProfilPage';
import InfoProdukPage from './pages/InfoProdukPage';
import Homepage from './pages/Homepage';
import PenawarPage1 from './pages/PenawarPage1'
import PenawarPage2 from './pages/PenawarPage2'
import DaftarProduct from './pages/DaftarProduct';
import Notification from './pages/Notification';
import Minat from './pages/Minat';
import Terjual from './pages/Terjual';
import HalamanProdukSeller from './pages/HalamanProdukSeller';
import HalamanProdukBuyer from './pages/HalamanProdukBuyer';
import Akun from './pages/Akun';

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Homepage />}></Route>
				<Route exact path="/login" element={<LoginPage />}></Route>
				<Route exact path="/register" element={<RegisterPage />}></Route>
				<Route exact path="/update/profile" element={<InfoProfilPage />}></Route>
				<Route exact path="/update/product" element={<InfoProdukPage />}></Route>
				<Route exact path="/penawaran" element={<PenawarPage1 />}></Route>
				<Route exact path="/penawaran2" element={<PenawarPage2 />}></Route>
				<Route exact path="/daftar/product" element={<DaftarProduct />}></Route>
				<Route exact path="/notification" element={<Notification />}></Route>
				<Route exact path="/minat" element={<Minat />}></Route>
				<Route exact path="/terjual" element={<Terjual />}></Route>
				<Route exact path="/seller/info/product" element={<HalamanProdukSeller />}></Route>
				<Route exact path="/buyer/info/product" element={<HalamanProdukBuyer />}></Route>
				<Route exact path="/akun" element={<Akun />}></Route>
			</Routes>
		</>
	);
}

export default App;
 