import styles from './Inquiry.module.css';

export default function Inquiry(props) {
  return (
    <div className={styles.inquiry}>
      <p className={styles.title}>{props.inquiry?.title}</p>
    </div>
  );
}
