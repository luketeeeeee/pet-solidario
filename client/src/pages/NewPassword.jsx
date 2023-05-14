import React from 'react';

import { useParams } from 'react-router-dom';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';

export function NewPassword() {
	const { userId, token } = useParams();

	return (
		<>
			<h1>{userId}</h1>
			<h1>{token}</h1>
		</>
	);
}
