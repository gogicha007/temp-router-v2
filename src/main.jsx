import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoices from './components/invoice.jsx';
import Expenses from './components/expenses.jsx';
import Bills from './components/bills.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/invoices" element={<Invoices />} >
          <Route path=':invoiceId' element={<Bills/>}></Route>
        </Route>
        <Route path="/expenses" element={<Expenses />} />
        <Route
          path="*"
          element={
            <main className='text-center'>
              <p className='text-3xl'>There's nothing here</p>
            </main>
          }
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
