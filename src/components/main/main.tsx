/* The purpose of the Main component is to render an image and a TransactionHistoryTable component */

import React from 'react'
import Banner from '../../assets/shutterstock_1492617725.jpg'
import { TransactionTable } from '../transactionTable/transactionTable'
import { Description } from '../description/description'

export const Main = () => {
  return (
    <div>
        <img className='banner' src={Banner} alt='banner' />
        <TransactionTable />
        <Description />
    </div>
  )
}
