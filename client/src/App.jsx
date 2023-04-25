import React from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { PetsList } from './pages/PetsList';
import { AddPets } from './pages/AddPets';

function App() {
	const user = JSON.parse(localStorage.getItem('token'));

	return (
		<BrowserRouter>
			<Toaster />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pets" element={<PetsList />} />
				<Route path="/add-pet" element={<AddPets />} />
				{user ? (
					<>
						<Route path="/signup" element={<Navigate replace to="/" />} />
						<Route path="/signin" element={<Navigate replace to="/" />} />
					</>
				) : (
					<>
						<Route path="/signup" element={<SignUp />} />
						<Route path="/signin" element={<SignIn />} />
					</>
				)}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
