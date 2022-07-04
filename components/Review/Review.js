import styles from './Review.module.css';
import { Rating } from 'react-simple-star-rating';
import {
    getImage,
} from '../AdminForms/AdminForms';
export default function Review(props) {

  return (
    <div className={styles.review}>
      <div className={styles.image}>{getImage(props.image)}</div>
      <div className={styles.content}>
        <p className={styles.username}>{props.username}</p>
        <Rating
          className={styles.rating}
          initialValue={props.rating}
          allowHalfIcon={true}
          size={16}
          fillColor="#ffce51"
          emptyColor="#e3e3e3"
          readonly={true}
        />
        <p className={styles.description}>
          <span>“</span>
          {props.description}
        </p>
      </div>
    </div>
  );
}
