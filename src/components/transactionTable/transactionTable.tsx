import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TransactionTableRows } from '../transactionTableRows/transactionTableRows'
import { useQuery, gql } from '@apollo/client';

const GET_CUSTOMERS = gql`
  query {
    customers {
      id
      name
      transactions {
        amount
      }
    }
  }
`;

export interface Customer {
    id: number;
    name: string;
    transactions: {
      amount: number;
    }[];
  }

export const TransactionTable = () => {
    const { loading, error, data } = useQuery<{ customers: Customer[] }>(GET_CUSTOMERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <TableContainer>
            <Table className="table">
                <TableHead className='th'>
                    <TableRow>
                        <TableCell align="center">Transactions Amounts by Customer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.customers && <TransactionTableRows customers={data.customers} />}
                </TableBody>
            </Table>
        </TableContainer>
    )
}