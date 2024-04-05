import { useLocation, Outlet } from 'react-router-dom';

// import components
import HomePage from '../home-page/HomePage';

// import styles
import styles from './RootPage.module.css';

// import data
import { data } from '../data';

export default function RootPage() {
  const location = useLocation();

  return (
    <>
      <h1>CM STUDIOS</h1>
      {location.pathname === '/' ? (
        <HomePage data={data} />
      ) : (
        <Outlet context={[data]} />
      )}
    </>
  );
}
