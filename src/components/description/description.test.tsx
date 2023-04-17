/* The Footer component should contain and render a location icon, an email icon, and a phone icon */

import { render, screen } from '@testing-library/react'
import { Description } from './description'

describe('Description', () => {
    test('renders a an unordered list', () => {
        render(<Description />);

        const paragraphElement = screen.getByText("The purpose of this tiny app is to demonstrate Michael's ability to apply various tech skills quickly over the course of a weekend.");
        expect(paragraphElement).toBeInTheDocument();

        const unorderedListElement = screen.getByRole('list');
        expect(unorderedListElement).toBeInTheDocument();
    });
});