import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Bills from './components/bills';
import Expenses from './components/expenses';
import Invoices from './components/invoice';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage/>}>
        <Route path="/invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Bills />}></Route>
        </Route>
        <Route path="/expenses" element={<Expenses />} />
        <Route
          path="*"
          element={
            <main className="text-center">
              <p className="text-3xl">There's nothing here</p>
            </main>
          }
        ></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
