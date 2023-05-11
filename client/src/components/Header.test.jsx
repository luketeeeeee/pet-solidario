import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

const loginLinkID = 'login-link';
const registerLinkID = 'register-link';
const petListLinkId = 'pet-list-link';

describe('Header', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
	});

	describe('Login link', () => {
		test('Should be able to get the user to the login page', () => {
			expect(screen.getByTestId(loginLinkID)).toHaveAttribute(
				'href',
				'/signin'
			);
		});
	});

	describe('Register link', () => {
		test('Should be able to get the user to the register page', () => {
			expect(screen.getByTestId(registerLinkID)).toHaveAttribute(
				'href',
				'/signup'
			);
		});
	});

	describe('PetList link', () => {
		test('Should be able to get the user to the pet list page', () => {
			expect(screen.getByTestId(petListLinkId)).toHaveAttribute(
				'href',
				'/pets'
			);
		});
	});
});
