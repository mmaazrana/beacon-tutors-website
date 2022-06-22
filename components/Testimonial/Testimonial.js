import styles from './Testimonial.module.css';
import {Star} from 'lucide-react';
export default function Testimonial(props) {
  return (
    <div className={styles.testimonial}>
      <div className={styles.image} >{props.image}</div>
      <div className={styles.content} >
        <p className={styles.username}>{props.username}</p>
        <div className={styles.rating}>
          {[...Array(0 + props.rating)].map(() => (
            <Star className={styles.filled} />
          ))}
          {[...Array(5 - props.rating)].map(() => (
            <Star className={styles.empty} />
          ))}
        </div>
        <p className={styles.description}>
          <span>“</span>{props.description}
        </p>
      </div>
    </div>
  );
}
