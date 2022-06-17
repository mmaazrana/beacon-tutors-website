import styles from './HowItWorks.module.css';
import Working from '../Working/Working';

export default function HowItWorks(props) {

  return (
    <div className={styles.main}>
      {/* working objects passed as prop will be used here*/}
      {props.data.map((value, index) => (
        //here if key can be accessed inside working component, then index prop is not needed
        <Working key={index} index={index} heading={value.heading} description={value.description} image={value.image} length={props.data.length} />
      ))}
    </div>
  );
}
