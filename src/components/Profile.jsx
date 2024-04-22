// src/Product.jsx
import styles from "./Profile.module.css";

const Product = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div>
        <img className={styles.image} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.profileInformation}>
        <li className={styles.profileInformationItem}>
          <span>Followers</span>
          <span className={styles.integer}>{stats.followers}</span>
        </li>

        <li className={styles.profileInformationItem}>
          <span>Views</span>
          <span className={styles.integer}>{stats.views}</span>
        </li>

        <li className={styles.profileInformationItem}>
          <span>Likes</span>
          <span className={styles.integer}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Product;
