import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

export function ResetPassword() {
	const [emailSent, setEmailSent] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		if (formData) {
			try {
				await fetch('http://localhost:8080/api/password-reset', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}).then((response) => {
					console.log(response);
					if (!response.ok) {
						return response.text().then((text) => {
							throw new String(text);
						});
					}

					return response.text().then((text) => {
						let successfullySendedEmail = JSON.parse(String(text));
						toast.success(successfullySendedEmail.message, {
							duration: 20000,
							style: { minWidth: '500px' },
						});
					});
				});
			} catch (error) {
				console.log(error);
				let errorJsonFormat = JSON.parse(error);

				toast.error(errorJsonFormat.message);
			}
		}
	};

	return (
		<>
			<main className="flex h-full items-center justify-center bg-reset-password-img bg-cover bg-no-repeat text-white">
				<div className="flex h-[420px] w-[600px] justify-center">
					<form
						className="flex w-full flex-col rounded-3xl bg-black bg-opacity-60 p-6 text-center"
						onSubmit={handleSubmit}
					>
						<Link
							to="/signin"
							className="h-14 w-14"
							title="Voltar à tela de login"
						>
							<ArrowLeftCircleIcon className="h-14 w-14" />
						</Link>
						<h1 className="text-3xl">Esqueceu a senha?</h1>
						<p className="text-white">
							Sem problemas, enviaremos as instruções para mudar a senha.
						</p>

						<div className="mt-7 flex h-full flex-col items-center justify-between text-lg text-black">
							<input
								type="text"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={formData.email}
								required
								className="h-[70px] w-[400px] rounded-2xl px-5 placeholder:text-gray-400"
							/>

							<button
								type="submit"
								className="h-16 w-64 self-center rounded-2xl bg-button-yellow text-xl font-bold transition duration-500 ease-in-out hover:bg-yellow-600"
							>
								Mudar senha
							</button>

							<Link
								to="/signin"
								className="flex items-center justify-center self-center  text-lg text-white ease-in-out"
							>
								<p className="text-xl underline">Voltar para o login</p>
							</Link>
						</div>
					</form>
				</div>
			</main>
		</>
	);
}
