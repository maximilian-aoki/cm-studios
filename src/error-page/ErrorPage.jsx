import { Link } from 'react-router-dom';

// import styles
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  return (
    <>
      <h1>Error</h1>
      <Link to={'/'}>Home</Link>
    </>
  );
}
