import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

export function SignUp() {
	const [data, setData] = useState({
		username: '',
		phoneNumber: '',
		email: '',
		password: '',
	});

	return (
		<>
			<main className="flex h-full items-center justify-end bg-signup-img bg-cover bg-no-repeat text-white">
				<div className="flex w-2/5 justify-start">
					<form className="flex w-11/12 flex-col rounded-3xl bg-black bg-opacity-70 p-5 text-center">
						<Link to="/">
							<ArrowLeftCircleIcon className="h-12 w-12" />
						</Link>
						<h1 className="text-3xl">Cadastre-se</h1>

						<div></div>
					</form>
				</div>
			</main>
		</>
	);
}
