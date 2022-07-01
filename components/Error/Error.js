import Lottie from 'lottie-react';
import styles from '../Error/Error.module.css';

export default function Error(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.error}>
          <Lottie
            className={`${styles.lottie}`}
            animationData={props.lottie}
            loop={true}
            autoplay={true}
          />
          <h2>{props.error}</h2>
        </div>
      </div>
    </>
  );
}
