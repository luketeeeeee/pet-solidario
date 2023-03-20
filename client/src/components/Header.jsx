import { Link } from 'react-router-dom';

export function Header() {
	return (
		<header className="flex w-full justify-between bg-slate-900 px-14 py-5 text-white">
			<div className="flex w-[19%] justify-between text-lg">
				<Link
					to="/"
					className="flex items-center transition duration-300 ease-in-out hover:text-slate-300"
				>
					<h1>Pet Solidário</h1>
				</Link>
				<Link className="flex items-center transition duration-300 ease-in-out hover:text-slate-300">
					<h1>Pets para adoção</h1>
				</Link>
			</div>

			<div className="flex w-[15%] justify-between font-bold text-slate-900">
				<Link className="rounded-xl bg-button-yellow px-5 py-2 transition duration-500 ease-in-out hover:bg-yellow-600">
					Login
				</Link>

				<Link className="rounded-xl bg-button-yellow px-5 py-2 transition duration-500 ease-in-out hover:bg-yellow-600">
					Cadastra-se
				</Link>
			</div>
		</header>
	);
}
