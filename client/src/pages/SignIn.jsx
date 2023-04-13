import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ArrowLeftCircleIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

export function SignIn() {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (userData.email && userData.password) {
			try {
				await fetch('http://localhost:8080/api/auth', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(userData),
				}).then((response) => {
					console.log(response);
					if (!response.ok) {
						return response.text().then((text) => {
							console.log(text);
							throw new String(text);
						});
					}

					return response.text().then((text) => {
						let successfullyUserLoginMessage = JSON.parse(String(text));
						localStorage.setItem('token', text);
						window.location = '/';
					});
				});
			} catch (error) {
				let errorJsonFormat = JSON.parse(error);

				toast.error(errorJsonFormat.message);
			}
		}
	};

	return (
		<>
			<main className="flex h-full items-center justify-center bg-signin-img bg-cover bg-no-repeat text-white">
				<div className="flex h-[500px] w-[550px] justify-center">
					<form
						className="flex w-full flex-col rounded-3xl bg-black bg-opacity-60 p-6 text-center"
						onSubmit={handleSubmit}
					>
						<Link to="/" className="h-5 w-14" title="Voltar à página inicial">
							<ArrowLeftCircleIcon className="h-20 w-14" />
						</Link>
						<h1 className="text-3xl">Login</h1>

						<div className="mt-20 flex h-80 flex-col justify-between text-lg text-black">
							<input
								type="text"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={userData.email}
								required
								className="h-14 rounded-2xl px-5 placeholder:text-gray-400"
							/>
							<input
								type="password"
								placeholder="Senha"
								name="password"
								onChange={handleChange}
								value={userData.password}
								required
								className="h-14 mt-5 rounded-2xl px-5 placeholder:text-gray-400"
							/>
							<button
								type="submit"
								className="mt-5 h-16 w-80 self-center rounded-2xl bg-button-yellow text-xl font-bold transition duration-500 ease-in-out hover:bg-yellow-600"
							>
								Login
							</button>

							<Link
								to="/signup"
								className="flex mt-5 h-16 w-64 items-center justify-center self-center rounded-2xl bg-slate-900 text-lg text-white transition duration-500 ease-in-out hover:bg-slate-800"
							>
								Cadastre-se
							</Link>

							<Link
								to="mudarSenha"
								className="flex mt-5 items-center justify-center self-center  text-lg text-white ease-in-out"
							>
								<u>Esqueceu a senha?</u>
							</Link>

						
							
}

						</div>
					</form>
				</div>
			</main>
		</>
	);
}
