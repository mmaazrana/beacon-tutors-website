import styles from './HowItWorks.module.css';
import Working from '../Working/Working';

export default function HowItWorks(props) {
  return (
    <div className={styles.main}>
      {props.data?.map((working, index) => (
        <Working
          key={index}
          index={index}
          heading={working.heading}
          description={working.description}
          image={working.image}
          length={props.data.length}
        />
      ))}
    </div>
  );
}
