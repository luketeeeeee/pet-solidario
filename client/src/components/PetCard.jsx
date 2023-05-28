import React from 'react';
import { Link } from 'react-router-dom';

export function PetCard({
	_id,
	name,
	species,
	sex,
	breed,
	ownerName,
	ownerEmail,
	description,
	photo,
}) {
	return (
		<Link className="shadow-card hover:shadow-cardhover card group group relative flex h-[500px] flex-col rounded-xl hover:cursor-pointer">
			<div className="h-[20px] rounded-t-xl bg-yellow-400 transition duration-700 ease-in-out group-hover:bg-yellow-600">
				{''}
			</div>
			<img
				className="h-[400px] w-full object-cover"
				src={photo}
				alt={`Foto de ${name}`}
			/>
			<div className="h-[80px] rounded-b-xl bg-yellow-400 pt-3 transition duration-700 ease-in-out group-hover:bg-yellow-600">
				<h1 className="px-5 text-2xl font-bold text-white">{name}</h1>
			</div>
		</Link>
	);
}
