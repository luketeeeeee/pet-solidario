import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export function Header() {
	return (
		<header className="flex w-full flex-wrap justify-between bg-slate-900 px-16 py-4 text-white">
			<div className="flex w-64 justify-between text-lg">
				<Link
					title="Logo do Pet Solidário"
					to="/"
					className="flex items-center transition duration-300 ease-in-out hover:text-slate-300"
				>
					<img src={logo} alt="Pet solidario" className="w-16 max-w-xs" />
				</Link>
				<Link className="flex items-center transition duration-300 ease-in-out hover:text-slate-300">
					<h1>Pets para adoção</h1>
				</Link>
			</div>

			<div className="min-w-10 flex items-center justify-between gap-x-3 font-bold text-slate-900">
				<Link className="max-h-10 rounded-xl bg-button-yellow px-5 py-2 transition duration-500 ease-in-out hover:bg-yellow-600">
					Login
				</Link>

				<Link className="max-h-10 rounded-xl bg-button-yellow px-5 py-2 transition duration-500 ease-in-out hover:bg-yellow-600">
					Cadastre-se
				</Link>
			</div>
		</header>
	);
}
