import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { SignIn } from './SignIn';
import { BrowserRouter } from 'react-router-dom';

const loginFormID = 'login-form';
const registerLinkID = 'register-link';

describe('SignIn', () => {
	describe('SignIn form', () => {
		test('Should be able to submit the login form data', () => {
			const handleSubmit = vi.fn();

			const { getByTestId } = render(
				<BrowserRouter>
					<SignIn>
						<form onSubmit={handleSubmit}></form>
					</SignIn>
				</BrowserRouter>
			);
			fireEvent.click(getByTestId(loginFormID));

			expect(handleSubmit).toHaveBeenCalled;
		});
	});

	describe('Register link', () => {
		test('Should be able to get the user to the register page', () => {
			const { getByTestId } = render(
				<BrowserRouter>
					<SignIn />
				</BrowserRouter>
			);

			expect(getByTestId(registerLinkID)).toHaveAttribute('href', '/signup');
		});
	});
});
