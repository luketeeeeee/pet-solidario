import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { IMaskInput } from 'react-imask';
import {
	ArrowLeftCircleIcon,
	EyeIcon,
	EyeSlashIcon,
} from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

export function SignUp() {
	const navigate = useNavigate();

	const [passwordShow, setPasswordShow] = useState();
	const [userData, setUserData] = useState({
		username: '',
		phoneNumber: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const toggleShowPassword = () => {
		setPasswordShow(!passwordShow);
	};

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			userData.username &&
			userData.phoneNumber &&
			userData.email &&
			userData.password &&
			userData.confirmPassword
		) {
			try {
				await fetch('http://localhost:8080/api/users', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(userData),
				}).then((response) => {
					if (!response.ok) {
						return response.text().then((text) => {
							throw new String(text);
						});
					}

					return response.text().then((text) => {
						let successfullyUserRegisterMessage = JSON.parse(String(text));
						toast.success(successfullyUserRegisterMessage.message);
						navigate('/signin');
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
			<main className="flex h-full items-center justify-end bg-signup-img bg-cover bg-no-repeat text-white">
				<div className="mr-12 flex h-[650px] w-[600px] justify-start">
					<form
						data-testid="register-form"
						className="flex w-11/12 flex-col rounded-3xl bg-black bg-opacity-60 p-6 text-center"
						onSubmit={handleSubmit}
					>
						<Link to="/" className="h-14 w-14" title="Voltar à página inicial">
							<ArrowLeftCircleIcon className="h-14 w-14" />
						</Link>
						<h1 className="text-3xl">Cadastre-se</h1>

						<div className="mt-7 flex h-full flex-col justify-between text-lg text-black">
							<input
								type="text"
								placeholder="Nome"
								name="username"
								onChange={handleChange}
								value={userData.username}
								required
								className="h-14 rounded-2xl px-5 placeholder:text-gray-400"
							/>

							<IMaskInput
								mask="(00) 0 0000-0000"
								type="tel"
								placeholder="Telefone"
								name="phoneNumber"
								onChange={handleChange}
								value={userData.phoneNumber}
								required
								className="h-14 rounded-2xl px-5 placeholder:text-gray-400"
							/>

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

							<div className="flex w-full rounded-2xl bg-white focus-within:outline focus-within:outline-1 focus-within:outline-offset-2 focus-within:outline-white">
								<input
									type={passwordShow ? 'text' : 'password'}
									placeholder="Confirmar senha"
									name="confirmPassword"
									onChange={handleChange}
									value={userData.confirmPassword}
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

							<h2 className="text-1xl mt-5 leading-5 text-white">
								{' '}
								*A senha deve conter: ao menos uma letra maiúscula, uma
								minúscula, um caractere especial e um número.
							</h2>

							<button
								type="submit"
								className="mt-5 h-16 w-80 self-center rounded-2xl bg-button-yellow text-xl font-bold transition duration-500 ease-in-out hover:bg-yellow-600"
							>
								Cadastrar-se
							</button>
						</div>
					</form>
				</div>
			</main>
		</>
	);
}
