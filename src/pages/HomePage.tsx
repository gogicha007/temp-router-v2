import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getList } from '../utils/fetcher';

const HomePage = () => {
  const navigate = useNavigate();

  const clickButton = async () => {
    const res = await getList('Alive');
    // console.log(res);
    navigate('/invoices', {
      state: { data: res?.results, pagination: res?.info },
    });
  };
  return (
    <div className="container mx-auto">
      <nav className="bg-gray-100 flex gap-4 mynav">
        <button onClick={clickButton}>Invoices</button>
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
