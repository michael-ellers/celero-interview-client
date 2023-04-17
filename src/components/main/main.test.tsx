/* The Main component should render and contain a transactionHistoryTable component */

import { render, screen } from '@testing-library/react'
import { Main } from './main'

describe('Main', () => {
    test('renders correctly', () => {
        render(<Main />)
        
        const bannerElement = screen.getByAltText('banner');
        expect(bannerElement).toBeInTheDocument();
    });
});