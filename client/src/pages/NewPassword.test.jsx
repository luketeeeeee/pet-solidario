import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { NewPassword } from './NewPassword';
import { BrowserRouter } from 'react-router-dom';

const newPasswordFormID = 'NewPassword-form';

describe('NewPassword form', () => {
	test('Should be able to submit the new password form data', () => {
		const handleSubmit = vi.fn();

		const { getByTestId } = render(
			<BrowserRouter>
				<NewPassword>
					<form onSubmit={handleSubmit}></form>
				</NewPassword>
			</BrowserRouter>
		);
		fireEvent.click(getByTestId(newPasswordFormID));

		expect(handleSubmit).toHaveBeenCalled;
	});
});
