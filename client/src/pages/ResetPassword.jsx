import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

export function ResetPassword() {
	return (
		<>
			<main className="flex h-full items-center justify-center bg-reset-password-img bg-cover bg-no-repeat text-white">
				<div className="flex h-[375px] w-[600px] justify-center">
					<form className="flex w-full flex-col rounded-3xl bg-black bg-opacity-60 p-6 text-center">
						<Link
							to="/signin"
							className="h-14 w-14"
							title="Voltar à tela de login"
						>
							<ArrowLeftCircleIcon className="h-14 w-14" />
						</Link>
						<h1 className="text-3xl">Esqueceu a senha?</h1>

						<div className="mt-7 flex h-full flex-col items-center justify-between text-lg text-black">
							<input
								type="text"
								placeholder="Email"
								name="email"
								// onChange={handleChange}
								// value={userData.email}
								required
								className="h-[70px] w-[400px] rounded-2xl px-5 placeholder:text-gray-400"
							/>

							<button
								type="submit"
								className="h-16 w-64 self-center rounded-2xl bg-button-yellow text-xl font-bold transition duration-500 ease-in-out hover:bg-yellow-600"
							>
								Próximo
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
