import styles from './Review.module.css';
import { Star } from 'lucide-react';
export default function Review(props) {
  return (
    <div className={styles.review}>
      <div className={styles.image}>{props.image}</div>
      <div className={styles.content}>
        <p className={styles.username}>{props.username}</p>
        {[...Array(5)].map((x, i) => (
          <Star
            key={i}
            className={i < props.rating ? styles.filled : styles.empty}
          />
        ))}
        <p className={styles.description}>
          <span>“</span>
          {props.description}
        </p>
      </div>
    </div>
  );
}
