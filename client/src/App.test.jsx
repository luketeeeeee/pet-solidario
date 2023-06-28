import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import App from './App';

describe('App', () => {
	test('Should be able to load the whole application', () => {
		const { getByText } = render(<App />);

		expect(getByText('Login'), getByText('Cadastre-se')).toBeInTheDocument();
	});
});
