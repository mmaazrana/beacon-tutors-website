import styles from './HowItWorks.module.css';
import Working from '../Working/Working';

export default function HowItWorks(props) {
  return (
    <div className={styles.howitworks}>
      {/* working objects passed as prop will be used here*/}
      {[...Array(5)].map((value, index) => (
        //here if key can be accessed inside working component, then index prop is not needed
        <Working key={index} index={index} />
      ))}
    </div>
  );
}
