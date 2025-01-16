import { useNavigate, useParams } from 'react-router-dom';
import { getInvoice } from './data';


const Bills = () => {
  const navigate = useNavigate()
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId as string));

  return (
    <main className="flex flex-col py-5 border my-4 w-1/3 mx-auto">
      <h2>Total Due: {invoice?.amount}</h2>
      <p>{invoice?.name}:{invoice?.number}</p>
      <p>Due Date: {invoice?.due}</p>
      <button onClick={()=>navigate('/invoices')}>Go back</button>
    </main>
  );
};

export default Bills;
