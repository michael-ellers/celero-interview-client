/* The transactionHistoryTable component should render a table of sample data */

import { render, screen } from '@testing-library/react'
import { TransactionTable } from './transactionTable'

describe('Transaction History Table', () => {
    test('renders the component', () => {
        render(<TransactionTable />);
        
        const tableElement = screen.getByRole('table');
        expect(tableElement).toBeInTheDocument();
    });
});