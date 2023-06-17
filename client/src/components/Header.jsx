import React from 'react';
import { Link } from 'react-router-dom';

import {
	ArrowRightOnRectangleIcon,
	PlusIcon,
} from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

export function Header() {
	const user = JSON.parse(localStorage.getItem('token'));

	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<header className="flex h-[15%] w-full flex-wrap justify-between bg-slate-900 px-16 py-3 text-white xl:h-[12%]">
			<div className="flex w-[420px] justify-between">
				<Link
					to="/"
					title="Logo do Pet Solidário"
					className="flex items-center"
				>
					<img src={logo} alt="Pet solidario" className="w-16 max-w-xs" />
				</Link>
				<Link
					data-testid="pet-list-link"
					to="/pets"
					className="flex items-center text-button-yellow transition duration-300 ease-in-out hover:text-yellow-600"
				>
					<h1 className="text-xl">Encontre um pet</h1>
				</Link>
				<Link
					to="/about-us"
					className="flex items-center text-button-yellow transition duration-300 ease-in-out hover:text-yellow-600"
				>
					<h1 className="text-xl">Sobre nós</h1>
				</Link>
			</div>

			<div className="min-w-10 flex items-center justify-between gap-x-3 text-xl font-bold text-slate-900">
				{user ? (
					<div className="flex w-[400px] justify-between">
						<p className="flex items-center justify-center font-medium text-white">
							Olá,&nbsp;
							<Link className="font-bold text-button-yellow transition duration-300 ease-in-out hover:text-yellow-600">
								{user.username.substring(0, user.username.indexOf(' '))}
							</Link>
						</p>
						<div className="flex w-[260px] justify-between">
							<Link
								to="/add-pet"
								className="flex items-center justify-center rounded-2xl bg-green-600 py-3 px-3 text-white transition duration-500 ease-in-out hover:bg-green-500"
								title="Cadastrar um pet"
							>
								Cadastre um pet
							</Link>

							<button
								className="flex items-center justify-center rounded-2xl bg-red-600 py-1 px-2 text-white transition duration-500 ease-in-out hover:bg-red-700"
								onClick={handleLogout}
								title="Sair"
							>
								<ArrowRightOnRectangleIcon className="w-10" />
							</button>
						</div>
					</div>
				) : (
					<>
						<Link
							data-testid="login-link"
							to="/signin"
							className="max-h-11 rounded-xl bg-green-400 px-5 py-2 transition duration-500 ease-in-out hover:bg-green-600"
						>
							Login
						</Link>

						<Link
							data-testid="register-link"
							to="/signup"
							className="max-h-11 rounded-xl bg-button-yellow px-5 py-2 transition duration-500 ease-in-out hover:bg-yellow-600"
						>
							Cadastre-se
						</Link>
					</>
				)}
			</div>
		</header>
	);
}
