import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

export function SignUp() {
	const navigate = useNavigate();

	const [userData, setUserData] = useState({
		username: '',
		phoneNumber: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

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
						console.log(text);
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
				<div className="mr-12 flex h-[620px] w-[600px] justify-start">
					<form
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
								className="h-16 rounded-2xl px-5 placeholder:text-gray-400"
							/>
							<input
								type="text"
								placeholder="Telefone"
								name="phoneNumber"
								onChange={handleChange}
								value={userData.phoneNumber}
								required
								className="h-16 rounded-2xl px-5 placeholder:text-gray-400"
							/>

							<input
								type="text"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={userData.email}
								required
								className="h-16 rounded-2xl px-5 placeholder:text-gray-400"
							/>

							<input
								type="password"
								placeholder="Senha"
								name="password"
								onChange={handleChange}
								value={userData.password}
								minLength={8}
								maxLength={30}
								required
								className="h-16 rounded-2xl px-5 placeholder:text-gray-400"
							/>

							<input
								type="password"
								placeholder="Confirmar senha"
								name="confirmPassword"
								onChange={handleChange}
								value={userData.confirmPassword}
								minLength={8}
								maxLength={30}
								required
								className="h-16 rounded-2xl px-5 placeholder:text-gray-400"
							/>

							<button
								type="submit"
								className="mt-5 h-16 w-80 self-center rounded-2xl bg-button-yellow text-xl font-bold transition duration-500 ease-in-out hover:bg-yellow-600"
							>
								Cadastre-se
							</button>
						</div>
					</form>
				</div>
			</main>
		</>
	);
}
