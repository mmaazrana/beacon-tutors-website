import styles from './AdminInquiry.module.css';

export default function InfoField(props) {
  return (
    <div className={styles.infoRow}>
      <p className={styles.label}>{props.label}</p>
      <div className={styles.value}>
        <p>{props.value}</p>
      </div>
    </div>
  );
}
