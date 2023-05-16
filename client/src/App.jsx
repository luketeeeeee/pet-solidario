import React from 'react';

import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { PetsList } from './pages/PetsList';
import { ResetPassword } from './pages/ResetPassword';
import { AddPets } from './pages/AddPets';
import { NewPassword } from './pages/NewPassword';
import { PageNotFound } from './pages/PageNotFound';

function App() {
	const user = JSON.parse(localStorage.getItem('token'));

	return (
		<BrowserRouter>
			<Toaster />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/pets" element={<PetsList />} />
				<Route path="*" element={<PageNotFound />} />
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
						<Route exact path="/mudar-senha" element={<ResetPassword />} />
					</>
				)}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
