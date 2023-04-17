import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from './header'

describe('Header', () => {
    it('should render menu icon, app title, and search icon', () => {
        render(<Header />)
        expect(screen.getByLabelText('menu')).toBeInTheDocument()
        expect(screen.getByLabelText('search')).toBeInTheDocument()
        expect(screen.getByText('Cool New Celero Mobile App')).toBeInTheDocument()
    })

    it('should render the logo image', () => {
        render(<Header />)
        const logoImage = screen.getByAltText('logo')
        expect(logoImage).toBeInTheDocument()
        expect(logoImage).toHaveAttribute('src', 'celero_commerce_logo_white.png')
    })
});