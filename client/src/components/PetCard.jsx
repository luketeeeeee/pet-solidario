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
		<Link
			className="shadow-card hover:shadow-cardhover card group flex h-[450px] flex-col rounded-xl hover:cursor-pointer"
			to={`/pet-details/${_id}`}
		>
			<div className="h-[20px] rounded-t-xl bg-yellow-400 transition duration-700 ease-in-out group-hover:bg-yellow-600">
				{''}
			</div>
			<img
				className="h-[350px] w-full object-cover"
				src={photo}
				alt={`Foto de ${name}`}
			/>
			<div className="h-[80px] rounded-b-xl bg-yellow-500 pt-3 text-slate-700 transition duration-700 ease-in-out group-hover:bg-yellow-600 group-hover:text-gray-200">
				<h1 className="group-hover px-5 text-2xl font-bold">{name}</h1>
				<h2 className="group-hover px-5">
					{species}
					{`${breed ? `, ${breed}` : ''}`}
				</h2>
			</div>
		</Link>
	);
}
