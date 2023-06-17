import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { Header } from '../components/Header';
import Loader from '../components/Loader';

export function PetDetails() {
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
						<div className="flex h-5/6 w-3/5 rounded-3xl bg-black bg-opacity-60 p-6">
							<Link
								to="/pets"
								className="h-14 w-14 text-white"
								title="Voltar à página inicial"
							>
								<ArrowLeftCircleIcon className="h-14 w-14" />
							</Link>

							<div className="flex w-1/2 flex-col justify-between pb-10 pt-20 text-2xl font-bold text-white">
								<div className="flex h-3/5 flex-col">
									<div>
										<h1>Nome: {petDetails.name}</h1>
										<h2>Espécie: {petDetails.species}</h2>
										<h2>Raça: {petDetails.breed}</h2>
										{petDetails.sex === 'male' ? (
											<h2>Sexo: Macho</h2>
										) : petDetails.sex === 'female' ? (
											<h2>Sexo: Fêmea</h2>
										) : (
											<h2>Sexo: Não informado</h2>
										)}
									</div>

									<p className="mt-4 text-lg">{petDetails.description}</p>
								</div>

								<button className="h-16 w-72 self-start rounded-3xl bg-button-yellow text-black transition duration-500 ease-in-out hover:bg-yellow-600">
									Adotar
								</button>
							</div>

							<div className="flex w-1/2 items-center py-10">
								<img
									className="flex h-full w-full rounded-2xl object-cover"
									src={petDetails.photo}
									alt={petDetails.name}
								/>
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
