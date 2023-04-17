/* The Footer component should contain and render a location icon, an email icon, and a phone icon */

import { render, screen } from '@testing-library/react'
import { Footer } from './footer'

describe('Footer', () => {
    test('renders correctly', () => {
        render(<Footer />);

        const locationIconElement = screen.getByAltText('location');
        expect(locationIconElement).toBeInTheDocument();

        const emailIconElement = screen.getByAltText('email');
        expect(emailIconElement).toBeInTheDocument();

        const phoneIconElement = screen.getByAltText('phone');
        expect(phoneIconElement).toBeInTheDocument();
    });
});