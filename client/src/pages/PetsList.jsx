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

	useEffect(() => {
		const fetchPets = async () => {
			setLoading(true);

			try {
				const response = await fetch('http://localhost:8080/api/pets', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});

				console.log(response);

				if (response.ok) {
					const result = await response.json();

					setAllPets(result.data.reverse());
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
		<>
			<Header />
			{loading ? (
				<div>
					<Loader />
				</div>
			) : (
				<>
					<RenderPetCards
						data={allPets}
						title="Nenhum pet foi adicionado ainda"
					/>
				</>
			)}
		</>
	);
}
