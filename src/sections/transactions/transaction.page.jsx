import React from 'react'
import TransactionHeader from '../../components/transaction-header/transaction-header.component'
import InsightCard from '../../components/insight-card/insight-card.component'
import SectionHead from '../../components/section-head/section-head.component'
import TableActionBar from '../../components/table-action-bar/table-action-bar.component'
import TableHeader from '../../components/table-header/table-header.component'
import TableBody from '../../components/table-body/table-body.component'

const TransactionPage = () => {
  return (
      <div className='w-11/12 mx-auto'>
          <TransactionHeader />
          <div className='flex items-center justify-between'>
              <InsightCard title={'Online orders'} value={231} />
              <InsightCard title={'Amount Received'} value={`₹2392312.19`} />
          </div>
          <SectionHead title={'Transactions | This month'} />
          <div>
              <TableActionBar />
              <table className='w-full my-3'>
                  <TableHeader />
                  <TableBody />
              </table>
          </div>
    </div>
  )
}

export default TransactionPage