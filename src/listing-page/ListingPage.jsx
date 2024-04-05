import { useOutletContext, useParams, Link, Navigate } from 'react-router-dom';

// import styles
import styles from './ListingPage.module.css';

export default function ListingPage() {
  const [data] = useOutletContext();
  const { hash } = useParams();

  console.log(data);
  console.log(hash);

  let currentListing = {};
  let correctHash = false;
  data.forEach((listing) => {
    if (listing.hash === hash) {
      currentListing = listing;
      correctHash = true;
    }
  });

  if (!correctHash) {
    return <Navigate to={'/error'} />;
  }

  return (
    <>
      <Link to={'/'}>Home</Link>
      <h2>Property:</h2>
      <p>{currentListing.address}</p>
      <p>{currentListing.category}</p>
      <p>{currentListing.photoPaths}</p>
    </>
  );
}
