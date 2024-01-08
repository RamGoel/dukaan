import moment from 'moment'
import React from 'react'
const tableData=[
    {
        "OrderID": 12345,
        "OrderDate": "2022-01-01",
        "OrderAmount": "₹500.00",
        "TransactionFees": "₹25.00"
    },
    {
        "OrderID": 67890,
        "OrderDate": "2022-02-05",
        "OrderAmount": "₹750.50",
        "TransactionFees": "₹37.50"
    },
    {
        "OrderID": 23456,
        "OrderDate": "2022-03-10",
        "OrderAmount": "₹375.25",
        "TransactionFees": "₹18.76"
    },
    {
        "OrderID": 78901,
        "OrderDate": "2022-04-15",
        "OrderAmount": "₹1000.00",
        "TransactionFees": "₹50.00"
    },
    {
        "OrderID": 34567,
        "OrderDate": "2022-05-20",
        "OrderAmount": "₹603.75",
        "TransactionFees": "₹30.19"
    },
    {
        "OrderID": 89012,
        "OrderDate": "2022-06-25",
        "OrderAmount": "₹452.50",
        "TransactionFees": "₹22.63"
    },
    {
        "OrderID": 45678,
        "OrderDate": "2022-07-30",
        "OrderAmount": "₹901.25",
        "TransactionFees": "₹45.06"
    },
    {
        "OrderID": 90123,
        "OrderDate": "2022-08-05",
        "OrderAmount": "₹250.00",
        "TransactionFees": "₹12.50"
    },
    {
        "OrderID": 56789,
        "OrderDate": "2022-09-10",
        "OrderAmount": "₹803.50",
        "TransactionFees": "₹40.18"
    },
    {
        "OrderID": 12345,
        "OrderDate": "2022-10-15",
        "OrderAmount": "₹550.00",
        "TransactionFees": "₹27.50"
    },
    {
        "OrderID": 12345,
        "OrderDate": "2022-01-01",
        "OrderAmount": "₹500.00",
        "TransactionFees": "₹25.00"
    },
    {
        "OrderID": 67890,
        "OrderDate": "2022-02-05",
        "OrderAmount": "₹750.50",
        "TransactionFees": "₹37.50"
    },
    {
        "OrderID": 23456,
        "OrderDate": "2022-03-10",
        "OrderAmount": "₹375.25",
        "TransactionFees": "₹18.76"
    },
    {
        "OrderID": 78901,
        "OrderDate": "2022-04-15",
        "OrderAmount": "₹1000.00",
        "TransactionFees": "₹50.00"
    },
    {
        "OrderID": 34567,
        "OrderDate": "2022-05-20",
        "OrderAmount": "₹603.75",
        "TransactionFees": "₹30.19"
    },
    {
        "OrderID": 89012,
        "OrderDate": "2022-06-25",
        "OrderAmount": "₹452.50",
        "TransactionFees": "₹22.63"
    },
    {
        "OrderID": 45678,
        "OrderDate": "2022-07-30",
        "OrderAmount": "₹901.25",
        "TransactionFees": "₹45.06"
    },
    {
        "OrderID": 90123,
        "OrderDate": "2022-08-05",
        "OrderAmount": "₹250.00",
        "TransactionFees": "₹12.50"
    },
    {
        "OrderID": 56789,
        "OrderDate": "2022-09-10",
        "OrderAmount": "₹803.50",
        "TransactionFees": "₹40.18"
    },
    {
        "OrderID": 12345,
        "OrderDate": "2022-10-15",
        "OrderAmount": "₹550.00",
        "TransactionFees": "₹27.50"
    },
]

const TableBody = () => {
    return (
        <tbody>
            {
                tableData.map(item => {
                    return <tr className=' border-b-[1px] w-full rounded-sm'>
                        <th className='text-xs py-3 font-normal'>
                            <a href='/' className='text-blue-600'>
                                #{item.OrderID}
                            </a>
                        </th>
                        <th className='text-xs py-3 font-normal'>{moment(item.OrderDate).format('DD MMM, YYYY')}</th>
                        <th className='text-xs py-3 font-normal'>{item.OrderAmount}</th>
                        <th className='text-xs py-3 font-normal'>{item.TransactionFees}</th>
                    </tr>
                })
            }
        </tbody>
    )
}

export default TableBody