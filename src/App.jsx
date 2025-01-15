import { useState } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto">
        <nav className="bg-gray-100 flex gap-4 mynav">
          <Link to="/invoices">
            <span>Invoices</span>
          </Link>
          <Link to="/expenses">
            <span>Expenses</span>
          </Link>
        </nav>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
