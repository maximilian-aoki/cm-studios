import { Link } from 'react-router-dom';

// import styles
import styles from './HomePage.module.css';

export default function HomePage({ data }) {
  return (
    <div className={styles.homeContainer}>
      <h2>All Listings</h2>
      <div className={styles.listingsFrameFormatter}>
        <div className={styles.listingsFrame}>
          {data.map((listing) => {
            return (
              <Link
                key={listing.id}
                to={`/listings/${listing.hash}`}
                className={styles.listingCard}
              >
                <div className={styles.image}>
                  <img src={listing.thumbnailPath} alt="real estate" />
                </div>
                <div className={styles.listingInfo}>
                  <p className={styles.listingAddress}>{listing.address}</p>
                  <p className={styles.listingCategory}>{listing.category}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
