import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<header>
				<Link to="/">
					<h1>Pet Solidário</h1>
				</Link>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
