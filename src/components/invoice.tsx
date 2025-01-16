import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from './data';

const Invoices = () => {
  let invoices = getInvoices();
  console.log(invoices);
  return (
    <main className="text-center">
      <div className="flex flex-col gap-3 myinvoice">
        {invoices.map((invoice) => (
          <Link
            className="bg-gray-200"
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </div>
      <Outlet/>
    </main>
  );
};

export default Invoices;
