import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

export function ResetPassword() {
	return (
		<>
			<main className="flex h-full items-center justify-center bg-reset-password-img bg-cover bg-no-repeat text-white">
				<div className="flex h-[450px] w-[600px] justify-center">
					<form className="flex w-full flex-col rounded-3xl bg-black bg-opacity-60 p-6 text-center">
						<Link to="/" className="h-14 w-14" title="Voltar à tela de login">
							<ArrowLeftCircleIcon className="h-14 w-14" />
						</Link>
						<h1 className="text-3xl">Esqueceu a senha?</h1>
					</form>
				</div>
			</main>
		</>
	);
}
