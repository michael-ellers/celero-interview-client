import React from 'react'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { Customer } from '../transactionTable/transactionTable';

interface Props {
    customers: Customer[];
}

export const TransactionTableRows = ({ customers }: Props): JSX.Element => {
  
    return (
        <div>
            {customers.map(({ id, name, transactions }) => (
                <TableRow key={id} className="tr">
                        <TableCell align="left">{name}</TableCell>
                        <TableCell align="right">
                            {transactions.map((transaction, index) => (
                                <div key={index}>${transaction.amount.toFixed(2)}</div>
                            ))}
                        </TableCell>
                </TableRow>
            ))}
        </div>
    ); 
}