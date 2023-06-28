import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

export function NewPassword() {
	const navigate = useNavigate();
	const { userId, token } = useParams();

	const [settingNewPassword, setSettingNewPassword] = useState(false);
	const [formData, setFormData] = useState({
		newPassword: '',
		confirmNewPassword: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.newPassword && formData.confirmNewPassword) {
			setSettingNewPassword(true);
			console.log(formData.newPassword, formData.confirmNewPassword);

			try {
				await fetch(
					`${
						import.meta.env.VITE_API_URL
					}/api/password-reset/${userId}/${token}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(formData),
					}
				).then((response) => {
					if (!response.ok) {
						console.log(response);
						return response.text().then((text) => {
							throw new String(text);
						});
					}

					console.log(response);

					return response.text().then((text) => {
						setSettingNewPassword(false);

						let successfullyChangedPassword = JSON.parse(String(text));
						toast.success(successfullyChangedPassword.message);
						navigate('/signin');
					});
				});
			} catch (error) {
				console.log(error);

				setSettingNewPassword(false);
				let errorJsonFormat = JSON.parse(error);
				toast.error(errorJsonFormat.message);
			}
		}
	};

	return (
		<>
			<main className="flex h-full items-center justify-center bg-reset-password-img bg-cover bg-no-repeat text-white">
				<div className="flex h-[500px] w-[600px] justify-center">
					<form
						data-testid="NewPassword-form"
						className="flex w-full flex-col justify-between rounded-3xl bg-black bg-opacity-60 p-6 text-center"
						onSubmit={handleSubmit}
					>
						<Link
							to="/signin"
							className="h-14 w-14"
							title="Voltar à tela de login"
						>
							<ArrowLeftCircleIcon className="h-14 w-14" />
						</Link>
						<h1 className="text-3xl">Defina sua nova senha</h1>
						<p className="mt-5 leading-5 text-white">
							*Não se esqueça: a senha deve conter ao menos uma letra maiúscula,
							uma minúscula, um caractere especial e um número.
						</p>

						<div className="mt-7 flex h-full flex-col items-center justify-between text-lg text-black">
							<div className="flex h-[140px] flex-col justify-between">
								<input
									type="password"
									placeholder="Nova senha"
									name="newPassword"
									onChange={handleChange}
									value={formData.newPassword}
									required
									minLength={8}
									maxLength={30}
									className="h-[65px] w-[400px] rounded-2xl px-5 placeholder:text-gray-400"
								/>
								<input
									type="password"
									placeholder="Confirmar nova senha"
									name="confirmNewPassword"
									onChange={handleChange}
									value={formData.confirmNewPassword}
									required
									minLength={8}
									maxLength={30}
									className="h-[65px] w-[400px] rounded-2xl px-5 placeholder:text-gray-400"
								/>
							</div>

							{settingNewPassword ? (
								<button
									disabled
									type="submit"
									className="h-16 w-64 self-center rounded-2xl bg-gray-400 text-xl font-bold transition duration-500 ease-in-out"
								>
									Definindo...
								</button>
							) : (
								<button
									type="submit"
									className="h-16 w-64 self-center rounded-2xl bg-button-yellow text-xl font-bold transition duration-500 ease-in-out hover:bg-yellow-600"
								>
									Definir nova senha
								</button>
							)}

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
