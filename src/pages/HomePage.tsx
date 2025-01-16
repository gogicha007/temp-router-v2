import { Link, Outlet, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto">
      <nav className="bg-gray-100 flex gap-4 mynav">
        <button onClick={() => navigate('/invoices')}>Invoices</button>
        <Link to="/invoices">
          <span>Invoices</span>
        </Link>
        <Link to="/expenses">
          <span>Expenses</span>
        </Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default HomePage;
