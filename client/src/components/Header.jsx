import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

export function Header() {
	return (
		<header className="flex w-full justify-between bg-slate-900 py-5 text-white flex-wrap">
			<div className="flex w-[19%] justify-between text-lg ml-10 my-3">
				<Link
					to="/"
					className="flex items-center transition duration-300 ease-in-out hover:text-slate-300 mr-5"
				>
					<img src={logo} alt="Pet solidario" className="w-20 max-w-xs mr-15" />
				</Link>
				<Link className="flex items-center transition duration-300 ease-in-out hover:text-slate-300">
					<h1>Pets para adoção</h1>
				</Link>
			</div>

			<div className="flex justify-between font-bold text-slate-900 items-center gap-x-3 min-w-10 mx-10">
				<Link className="rounded-xl bg-button-yellow px-5 py-2 transition duration-500 ease-in-out hover:bg-yellow-600 max-h-10">
					Login
				</Link>

				<Link className="rounded-xl bg-button-yellow px-5 py-2 transition duration-500 ease-in-out hover:bg-yellow-600 max-h-10">
					Cadastra-se
				</Link>
			</div>
		</header>
	);
}
