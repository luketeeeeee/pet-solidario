import React from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { PetsList } from './pages/PetsList';
import { ForgotPassword } from './pages/ForgotPassword';
import { AddPets } from './pages/AddPets';
import { NewPassword } from './pages/NewPassword';
import { PageNotFound } from './pages/PageNotFound';
import { PetDetails } from './pages/PetDetails';
import { AboutUs } from './pages/AboutUs';

function App() {
	const user = JSON.parse(localStorage.getItem('token'));

	return (
		<BrowserRouter>
			<Toaster />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/pets" element={<PetsList />} />
				<Route path="*" element={<PageNotFound />} />
				<Route exact path="/pet-details/:petId" element={<PetDetails />} />
				<Route exact path="/about-us" element={<AboutUs />} />
				{user ? (
					<>
						<Route exact path="/add-pet" element={<AddPets />} />
						<Route exact path="/signup" element={<Navigate replace to="/" />} />
						<Route exact path="/signin" element={<Navigate replace to="/" />} />
						<Route
							exact
							path="/mudar-senha"
							element={<Navigate replace to="/" />}
						/>
						<Route
							exact
							path="/mudar-senha/:userId/:token"
							element={<Navigate replace to="/mudar-senha" />}
						/>
					</>
				) : (
					<>
						<Route
							exact
							path="/mudar-senha/:userId/:token"
							element={<NewPassword />}
						/>
						<Route
							exact
							path="/add-pet"
							element={<Navigate replace to="/" />}
						/>
						<Route exact path="/signup" element={<SignUp />} />
						<Route exact path="/signin" element={<SignIn />} />
						<Route exact path="/mudar-senha" element={<ForgotPassword />} />
					</>
				)}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
