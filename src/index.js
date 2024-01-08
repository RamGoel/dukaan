import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DashboardLayout from './layout/dashboard/dashboard.layout';
import TransactionPage from './sections/transactions/transaction.page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DashboardLayout component={<TransactionPage />} />
)