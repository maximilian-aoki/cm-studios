import { Link } from 'react-router-dom';

// import styles
import styles from './HomePage.module.css';

export default function HomePage({ data }) {
  return (
    <>
      <h2>Listings:</h2>
      {data.map((listing) => {
        return (
          <Link key={listing.id} to={`/listings/${listing.hash}`}>
            {listing.id}
          </Link>
        );
      })}
    </>
  );
}
