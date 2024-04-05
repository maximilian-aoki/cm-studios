import { useLocation, Outlet, Link } from 'react-router-dom';

// import components
import HomePage from '../home-page/HomePage';

// import styles
import styles from './RootPage.module.css';

// import data
import { data } from '../data';

export default function RootPage() {
  const location = useLocation();

  return (
    <div className={styles.rootContainer}>
      <header className={styles.header}>
        <h1>CM STUDIOS</h1>
        <h2>Real-Estate Media Production</h2>
        <Link to={'/'} className={styles.homeLink}></Link>
      </header>
      <main className={styles.mainContainer}>
        <div className={styles.main}>
          {location.pathname === '/' ? (
            <HomePage data={data} />
          ) : (
            <Outlet context={[data]} />
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>2024 Copyright CM Studios</p>
      </footer>
    </div>
  );
}
