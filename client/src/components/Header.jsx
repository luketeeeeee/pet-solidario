import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export function Header() {
	return (
		<header className="flex w-full flex-wrap justify-between bg-slate-900 py-5 text-white">
			<div className="my-3 ml-10 flex w-[19%] justify-between text-lg">
				<Link
					to="/"
					className="mr-5 flex items-center transition duration-300 ease-in-out hover:text-slate-300"
				>
					<img src={logo} alt="Pet solidario" className="mr-15 w-20 max-w-xs" />
				</Link>
				<Link className="flex items-center transition duration-300 ease-in-out hover:text-slate-300">
					<h1>Pets para adoção</h1>
				</Link>
			</div>

			<div className="min-w-10 mx-10 flex items-center justify-between gap-x-3 font-bold text-slate-900">
				<Link className="max-h-10 rounded-xl bg-button-yellow px-5 py-2 transition duration-500 ease-in-out hover:bg-yellow-600">
					Login
				</Link>

				<Link className="max-h-10 rounded-xl bg-button-yellow px-5 py-2 transition duration-500 ease-in-out hover:bg-yellow-600">
					Cadastra-se
				</Link>
			</div>
		</header>
	);
}
