import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import styles
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorContainer}>
      <h1>Error {error.status} ⛔</h1>
      <p>{error.error.message || error.statusText}</p>
      <Link to="/" className={styles.errorLink}>
        Back to Home
      </Link>
    </div>
  );
}
