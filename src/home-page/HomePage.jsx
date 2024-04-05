import { Link } from 'react-router-dom';

// import styles
import styles from './HomePage.module.css';

export default function HomePage({ data }) {
  return (
    <div className={styles.homeContainer}>
      <h2>Listings</h2>
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
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="real estate"
                  />
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
