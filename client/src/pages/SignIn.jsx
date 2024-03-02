import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
				await fetch(`${import.meta.env.VITE_API_URL}/api/auth`, {
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
						// let successfullyUserLoginMessage = JSON.parse(String(text));
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
			<main className="flex h-full items-center justify-center">
				<div className="flex h-[400px] w-[320px] justify-center">
					<form
						data-testid="login-form"
						className="flex w-full flex-col justify-between rounded-xl px-5 text-center"
						onSubmit={handleSubmit}
					>
						<h1 className="flex flex-col text-start text-2xl font-bold text-slate-900">
							Faça login no{' '}
							<Link className="w-40 text-button-yellow" to="/">
								Pet Solidário
							</Link>{' '}
						</h1>

						<div className="flex h-[230px] flex-col justify-between text-slate-900">
							<div className="flex w-full flex-col">
								<label className="text-start font-bold">Email</label>
								<input
									type="text"
									name="email"
									onChange={handleChange}
									value={userData.email}
									required
									className="h-10 rounded-xl bg-gray-300 px-5"
								/>
							</div>

							<div className="flex w-full flex-col">
								<label className="text-start font-bold">Senha</label>
								<input
									type="password"
									name="password"
									onChange={handleChange}
									value={userData.password}
									minLength={8}
									maxLength={30}
									required
									className="h-10 rounded-xl bg-gray-300 px-5"
								/>
							</div>

							<button
								type="submit"
								className="h-14 w-full self-center rounded-xl bg-slate-900 text-lg text-white transition duration-500 ease-in-out hover:bg-slate-900"
							>
								Login
							</button>
						</div>

						<div className="text-md flex h-12 flex-col justify-between text-slate-900">
							<p>
								Não tem uma conta?{' '}
								<Link
									data-testid="register-link"
									to="/signup"
									className="text-button-yellow underline"
								>
									{'  '}
									Cadastre-se
								</Link>
							</p>

							<Link
								to="/mudar-senha"
								className="flex items-center justify-center self-center text-blue-700 ease-in-out"
							>
								<p className="underline">Esqueceu a senha?</p>
							</Link>
						</div>
					</form>
				</div>
			</main>
		</>
	);
}
