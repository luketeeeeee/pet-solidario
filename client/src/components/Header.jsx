import { Link } from 'react-router-dom';

import {
	ArrowRightOnRectangleIcon,
	PlusIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

export function Header() {
	const user = JSON.parse(localStorage.getItem('token'));

	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<header className="flex h-[10vh] w-full flex-wrap justify-between bg-slate-900 px-16 py-3 text-white">
			<div className="flex w-72 justify-between">
				<Link
					to="/"
					title="Logo do Pet Solidário"
					className="flex items-center transition duration-300 ease-in-out hover:text-slate-300"
				>
					<img src={logo} alt="Pet solidario" className="w-16 max-w-xs" />
				</Link>
				<Link
					to="/pets"
					className="flex items-center transition duration-300 ease-in-out hover:text-slate-300"
				>
					<h1 className="text-xl">Pets para adoção</h1>
				</Link>
			</div>

			<div className="min-w-10 flex items-center justify-between gap-x-3 text-xl font-bold text-slate-900">
				{user ? (
					<div className="flex w-64 justify-between">
						<p className="flex items-center justify-center font-medium text-button-yellow">
							Olá, {user.username}
						</p>
						<Link
							className="flex w-10 items-center justify-center rounded-2xl bg-green-500 text-white"
							title="Cadastrar um pet"
						>
							<PlusIcon className="w-7" />
						</Link>

						<button
							className="flex items-center justify-center text-red-500"
							onClick={handleLogout}
						>
							<ArrowRightOnRectangleIcon className="w-10" />
						</button>
					</div>
				) : (
					<>
						<Link
							to="/signin"
							className="max-h-11 rounded-xl bg-button-yellow px-5 py-2 transition duration-500 ease-in-out hover:bg-yellow-600"
						>
							Login
						</Link>

						<Link
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
