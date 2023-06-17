import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { AddPets } from './AddPets';
import { BrowserRouter } from 'react-router-dom';

const addPetFormID = 'addpet-form';

describe('Add Pet form', () => {
	test('Should be able to submit the add pet form data', () => {
		const handleSubmit = vi.fn();

		const { getByTestId } = render(
			<BrowserRouter>
				<AddPets>
					<form onSubmit={handleSubmit}></form>
				</AddPets>
			</BrowserRouter>
		);
		fireEvent.click(getByTestId(addPetFormID));

		expect(handleSubmit).toHaveBeenCalled;
	});
});
