import React, { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import { PetCard } from '../components/PetCard';
import Loader from '../components/Loader';

const RenderPetCards = ({ data, title }) => {
	if (data?.length > 0) {
		return data.map((pet) => <PetCard key={pet._id} {...pet} />);
	}

	return <h2>{title}</h2>;
};

export function PetsList() {
	const [loading, setLoading] = useState(false);
	const [allPets, setAllPets] = useState(null);
	const [fullBg, setFullBg] = useState(false);

	useEffect(() => {
		const fetchPets = async () => {
			setLoading(true);

			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_URL}/api/pets`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				if (response.ok) {
					const result = await response.json();

					setAllPets(result.data.reverse());
					if (result.data.length > 4) {
						setFullBg(true);
					}
				}
			} catch (error) {
				alert(error);
			} finally {
				setLoading(false);
			}
		};

		fetchPets();
	}, []);

	return (
		<div
			className={`bg-size-100 sm:h-cover h-screen bg-pet-list-img sm:h-screen`}
		>
			<Header />
			<main className="flex h-[85%] justify-center bg-no-repeat xl:h-[88%]">
				{loading ? (
					<div className="flex items-center justify-center">
						<Loader />
					</div>
				) : (
					<div className="flex flex-col items-center">
						<h1 className="my-5 text-2xl font-extrabold text-white sm:text-3xl">
							Todos aqui precisam de um lar
						</h1>
						<div className="xs:grid-cols-2 grid grid-cols-1 gap-3 px-7 pb-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
							<RenderPetCards
								data={allPets}
								title="Nenhum pet foi adicionado ainda"
							/>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}
