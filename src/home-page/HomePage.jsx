import { Link } from 'react-router-dom';

// import styles
import styles from './HomePage.module.css';

export default function HomePage({ data }) {
  return (
    <div className={styles.homeContainer}>
      <h2>Listings</h2>
      <div className={styles.listingsFrame}></div>
      {/* {data.map((listing) => {
        return (
          <Link key={listing.id} to={`/listings/${listing.hash}`}>
            {listing.id}
          </Link>
        );
      })} */}
    </div>
  );
}
