import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
