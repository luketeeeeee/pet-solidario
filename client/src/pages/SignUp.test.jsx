import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { SignUp } from './SignUp';
import { BrowserRouter } from 'react-router-dom';

const registerFormID = 'register-form';

describe('Register form', () => {
	test('Should be able to submit the register form data', () => {
		const handleSubmit = vi.fn();

		const { getByTestId } = render(
			<BrowserRouter>
				<SignUp>
					<form onSubmit={handleSubmit}></form>
				</SignUp>
			</BrowserRouter>
		);
		fireEvent.click(getByTestId(registerFormID));

		expect(handleSubmit).toHaveBeenCalled;
	});
});
