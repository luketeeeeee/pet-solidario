import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header';
import Loader from '../components/Loader';
import { toast } from 'react-hot-toast';

export function SendEmail() {
	const user = JSON.parse(localStorage.getItem('token'));

	const { petId } = useParams();

	const [loading, setLoading] = useState(false);
	const [petDetails, setPetDetails] = useState(null);

	useEffect(() => {
		const fetchPetDetails = async () => {
			setLoading(true);

			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_URL}/api/pets/${petId}`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				if (response.ok) {
					const result = await response.json();

					setPetDetails(result.data);
				}
			} catch (error) {
				alert(error);
			} finally {
				setLoading(false);
			}
		};

		fetchPetDetails();
	}, []);

	if (petDetails !== null) {
		return (
			<div className="bg-size-100 h-screen bg-pet-list-img">
				<Header />
				<main className="flex h-[88%] flex-col items-center justify-center">
					{loading ? (
						<div className="flex items-center justify-center">
							<Loader />
						</div>
					) : (
						<div className="flex h-4/6 w-2/6 flex-col rounded-3xl bg-black bg-opacity-60 p-6 text-white">
							<Link
								to={`/pet-details/${petId}`}
								className="h-14 w-14"
								title="Voltar à página inicial"
							>
								<ArrowLeftCircleIcon className="h-14 w-14" />
							</Link>
							<div className="flex flex-col items-center">
								<p className="w-[85%] text-center text-xl">
									Informe seu interesse em{' '}
									<strong className="text-button-yellow">
										{petDetails.name}
									</strong>{' '}
									por meio de um email que será enviado para{' '}
									<strong className="text-button-yellow">
										{petDetails.ownerName}
									</strong>
								</p>
								<form
									className="flex flex-col items-center"
									// onSubmit={handleSubmit}
								>
									<textarea
										name="emailText"
										id="emailText"
										placeholder="Escreva o email aqui"
										rows="10"
										className="mt-5 w-[500px] resize-none rounded-2xl px-4 py-3 text-base text-black scrollbar-none"
										// onChange={handleChange}
									/>
									<button
										type="submit"
										className="bottom-0 mt-5 h-16 w-80 self-center rounded-2xl bg-button-yellow text-xl font-bold 
                         text-slate-50 transition duration-500 ease-in-out hover:bg-yellow-600"
									>
										Adicionar pet para adoção
									</button>
								</form>
							</div>
						</div>
					)}
				</main>
			</div>
		);
	} else {
		return (
			<div className="bg-size-100 h-screen bg-pet-list-img">
				<Header />
				<main className="flex h-[88%] flex-col items-center justify-center">
					<div className="flex items-center justify-center">
						<Loader />
					</div>
				</main>
			</div>
		);
	}
}
