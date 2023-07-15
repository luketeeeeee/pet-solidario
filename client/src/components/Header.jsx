import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	ArrowRightOnRectangleIcon,
	Bars3Icon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

export function Header() {
	const [isMenuOnScreen, setIsMenuOnScreen] = useState(false);

	const user = JSON.parse(localStorage.getItem('token'));
	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	const onToggleMenu = () => {
		setIsMenuOnScreen(!isMenuOnScreen);
	};

	return (
		<header className="flex min-h-[10%] w-full flex-wrap justify-between bg-slate-900 px-5 py-3 text-white md:px-8 xl:min-h-[12%]">
			<div className="flex w-full items-center justify-between">
				<Link
					to="/"
					title="Logo do Pet Solidário"
					className="flex items-center"
				>
					<img src={logo} alt="Pet solidario" className="w-12 max-w-xs" />
					<p className="ml-5 text-xl text-button-yellow md:hidden md:text-lg">
						Pet Solidário
					</p>
				</Link>

				<div
					className={`absolute left-0 ${
						isMenuOnScreen ? `top-[10%]` : `top-[-100%]`
					} min-h-[10%] w-full bg-slate-900 pb-0 md:static md:flex md:w-[600px] md:justify-end`}
				>
					<ul className="flex h-40 flex-col items-center gap-3 md:h-auto md:w-full md:flex-row md:justify-between md:gap-0">
						<li className="flex items-center md:h-11">
							<Link
								data-testid="pet-list-link"
								to="/pets"
								className="items-center text-button-yellow transition duration-300 ease-in-out hover:text-yellow-600"
							>
								<h1 className="text-base">Encontre um pet</h1>
							</Link>
						</li>

						<li className="flex items-center md:h-11">
							<Link
								to="/about-us"
								className="items-center text-button-yellow transition duration-300 ease-in-out hover:text-yellow-600"
							>
								<h1 className="text-base">Sobre nós</h1>
							</Link>
						</li>

						{user ? (
							<>
								<li className="hidden items-center md:flex md:h-11">
									<p className="flex items-center justify-center font-medium text-white">
										Olá,&nbsp;
										<Link className="font-bold text-button-yellow transition duration-300 ease-in-out hover:text-yellow-600">
											{user.username.substring(0, user.username.indexOf(' '))}
										</Link>
									</p>
								</li>

								<li className="flex items-center">
									<div className="flex h-14 w-60 flex-col items-center justify-between md:flex-row">
										<Link
											to="/add-pet"
											className="flex items-center justify-center rounded-2xl text-green-600 transition duration-500 ease-in-out md:bg-green-600 md:py-3 md:px-3 md:text-white md:hover:bg-green-500"
											title="Cadastrar um pet"
										>
											Cadastre um pet
										</Link>

										<button
											className="mx-auto flex items-center justify-center rounded-2xl text-white transition duration-500 ease-in-out md:bg-red-600 md:py-1 md:px-2 md:hover:bg-red-700"
											onClick={handleLogout}
											title="Sair"
										>
											<p className="flex text-red-700 md:hidden">Sair</p>
											<ArrowRightOnRectangleIcon className="hidden w-10 md:flex" />
										</button>
									</div>
								</li>
							</>
						) : (
							<>
								<li className="flex h-11 items-center">
									<Link
										data-testid="login-link"
										to="/signin"
										className="max-h-11 rounded-xl px-5 py-2 text-base text-green-400 transition duration-500 ease-in-out md:bg-green-400 md:text-white md:hover:bg-green-600"
									>
										Login
									</Link>
								</li>

								<li className="flex h-11 items-center">
									<Link
										data-testid="register-link"
										to="/signup"
										className="max-h-11 rounded-xl px-5 py-2 text-base text-green-400 transition duration-500 ease-in-out md:bg-button-yellow md:text-white md:hover:bg-yellow-600"
									>
										Cadastre-se
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>

				{isMenuOnScreen ? (
					<XMarkIcon
						className="w-9 cursor-pointer md:hidden"
						onClick={onToggleMenu}
					/>
				) : (
					<Bars3Icon
						className="w-9 cursor-pointer md:hidden"
						onClick={onToggleMenu}
					/>
				)}
			</div>
		</header>
	);
}
