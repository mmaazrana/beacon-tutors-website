import styles from './Announcement.module.css';
import { Calendar, Banknote, Clock } from 'lucide-react';

export default function Announcement(props) {
  return (
    <div className={styles.announcement}>
      <p className={styles.title}>{props.announcement.title}</p>
      <div className={styles.options}>
        <div className={styles.option}>
          <Calendar color="#FF6F66" />
          <p className={styles.optionText}>{props.announcement.days}</p>
        </div>
        <div className={styles.option}>
          <Banknote color="#4FC3B1" />
          <p className={styles.optionText}>{props.announcement.budget}</p>
        </div>
        <div className={styles.option}>
          <Clock color="#3E6C98" />
          <p className={styles.optionText}>{props.announcement.time}</p>
        </div>
      </div>
    </div>
  );
}
