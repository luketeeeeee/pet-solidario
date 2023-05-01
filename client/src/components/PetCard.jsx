import React from 'react';

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
		<div>
			<img src={photo} alt={`Foto do ${name}`} />
		</div>
	);
}
