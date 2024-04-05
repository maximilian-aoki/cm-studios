import { useState, useEffect, useRef } from 'react';
import { useOutletContext, useParams, Navigate } from 'react-router-dom';

// import styles
import styles from './ListingPage.module.css';

export default function ListingPage() {
  const [data] = useOutletContext();
  const { hash } = useParams();

  // find the correct listing by URL if available
  let currentListing = {};
  let correctHash = false;
  data.forEach((listing) => {
    if (listing.hash === hash) {
      currentListing = listing;
      correctHash = true;
    }
  });

  // redirect to error if listing url does not exist
  if (!correctHash) {
    return <Navigate to={'/error'} />;
  }

  // state and ref
  const [photoIndex, setPhotoIndex] = useState(0);
  const newRef = useRef(null);

  // auto timer effect
  useEffect(() => {
    const newTimeout = setTimeout(() => {
      moveForward();
    }, 5000);

    return () => {
      clearTimeout(newTimeout);
    };
  }, [photoIndex]);

  useEffect(() => {
    newRef.current.classList.add('decoration');
  }, [photoIndex]);

  // HANDLERS AND METHODS
  function handleClick(e) {
    if (e.target.getAttribute('data-id') === 'back') {
      if (photoIndex === 0) {
        setPhotoIndex(currentListing.photoPaths.length - 1);
      } else {
        setPhotoIndex((index) => index - 1);
      }
    } else if (e.target.getAttribute('data-id') === 'front') {
      moveForward();
    }
  }

  function moveForward() {
    if (photoIndex === currentListing.photoPaths.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex((index) => index + 1);
    }
  }

  function getCachePath(currentIndex, changeInt) {
    if (currentIndex === 0 && changeInt === -1) {
      return currentListing.photoPaths[currentListing.photoPaths.length - 1];
    }
    if (
      currentIndex === currentListing.photoPaths.length - 1 &&
      changeInt === 1
    ) {
      return currentListing.photoPaths[0];
    }
    return currentListing.photoPaths[photoIndex + changeInt];
  }

  return (
    <div className={styles.listingContainer}>
      <div className={styles.addressDetails}>
        <h2>{currentListing.address}</h2>
        <p>{currentListing.category}</p>
      </div>
      <div className={styles.imageContainer} data-id={currentListing.id}>
        <img
          key={currentListing.photoPaths[photoIndex]}
          ref={newRef}
          src={currentListing.photoPaths[photoIndex]}
          className={styles.image}
          alt="picture"
        />
        <img src={getCachePath(photoIndex, 1)} className={styles.cache} />
        <img src={getCachePath(photoIndex, -1)} className={styles.cache} />
      </div>
      <div className={styles.actionContainer}>
        <button
          data-id="back"
          onClick={handleClick}
          className={styles.backButton}
        ></button>
        <div className={styles.tracker}>
          {photoIndex + 1} / {currentListing.photoPaths.length}
        </div>
        <button
          data-id="front"
          onClick={handleClick}
          className={styles.frontButton}
        ></button>
      </div>
    </div>
  );
}
