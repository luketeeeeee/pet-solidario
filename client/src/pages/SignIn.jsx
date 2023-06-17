import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	ArrowLeftCircleIcon,
	EyeIcon,
	EyeSlashIcon,
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

export function SignIn() {
	const [passwordShow, setPasswordShow] = useState();
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	const toggleShowPassword = () => {
		setPasswordShow(!passwordShow);
	};

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
						data-testid="login-form"
						className="flex w-full flex-col justify-between rounded-3xl bg-black bg-opacity-60 p-6 text-center"
						onSubmit={handleSubmit}
					>
						<Link to="/" className="h-14 w-14" title="Voltar à página inicial">
							<ArrowLeftCircleIcon className="h-14 w-14" />
						</Link>
						<h1 className="text-3xl">Login</h1>

						<div className="mt-7 flex h-full flex-col justify-between text-lg text-black">
							<input
								type="text"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={userData.email}
								required
								className="h-14 rounded-2xl px-5 placeholder:text-gray-400"
							/>
							<div className="flex w-full rounded-2xl bg-white focus-within:outline focus-within:outline-1 focus-within:outline-offset-2 focus-within:outline-white">
								<input
									type={passwordShow ? 'text' : 'password'}
									placeholder="Senha"
									name="password"
									onChange={handleChange}
									value={userData.password}
									minLength={8}
									maxLength={30}
									required
									className="h-14 w-full rounded-2xl px-5 outline-none placeholder:text-gray-400"
								/>
								<button
									className="pr-4 text-gray-800"
									onClick={toggleShowPassword}
									type="button"
								>
									{passwordShow ? (
										<EyeSlashIcon className="h-10 w-10" />
									) : (
										<EyeIcon className="h-10 w-10" />
									)}
								</button>
							</div>
							<button
								type="submit"
								className="mt-5 h-16 w-80 self-center rounded-2xl bg-button-yellow text-xl font-bold transition duration-500 ease-in-out hover:bg-yellow-600"
							>
								Login
							</button>

							<Link
								data-testid="register-link"
								to="/signup"
								className="flex h-16 w-64 items-center justify-center self-center rounded-2xl bg-slate-900 text-lg text-white transition duration-500 ease-in-out hover:bg-slate-800"
							>
								Cadastre-se
							</Link>

							<Link
								to="/mudar-senha"
								className="flex items-center justify-center self-center  text-lg text-white ease-in-out"
							>
								<p className="text-xl underline">Esqueceu a senha?</p>
							</Link>
						</div>
					</form>
				</div>
			</main>
		</>
	);
}
