import { Link, Outlet, useLocation } from 'react-router-dom';
import { getInvoices } from './data';
import { IFCharacter } from '../types/interface';

const Invoices = () => {
  const {state} = useLocation()
  const data = state?.data || []

  const invoices = getInvoices();
  console.log(invoices)

  const d= data.slice(0,5)
  console.log(d);

  return (
    <main className="text-center">
      <div className="flex flex-col gap-3 myinvoice">
        {data.map((invoice: IFCharacter) => (
          <Link
            className="bg-gray-200"
            to={`/invoices/${invoice.id}`}
            key={invoice.id}
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
