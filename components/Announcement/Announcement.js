import { Banknote, Calendar, Clock } from 'lucide-react';
import styles from './Announcement.module.css';

export default function Announcement(props) {
  return (
    <div className={styles.announcement}>
      <p className={styles.title}>{props.announcement.title.replace('tutoring ',props.keyword+' ').replace('Tutoring ',props.keyword+' ').replace('tutor ',props.keyword+' ').replace('Tutor ',props.keyword+' ').replace('tuition ',props.keyword+' ').replace('Tuition ',props.keyword+' ')}</p>
      <div className={styles.options}>
        <div className={styles.daysOption}>
          <Calendar className={styles.icon} color="#FF6F66" />
          <div className={styles.column}>
            <p className={styles.optionText}>
              {props.announcement.days}-
              {props.announcement.days === 1 ? 'Day' : 'Days'}
            </p>
            <p className={styles.optionDetailText}> Per Week </p>
          </div>
        </div>
        <div className={styles.budgetOption}>
          <Banknote className={styles.icon} color="#4FC3B1" />
          <div className={styles.column}>
            <p className={styles.optionText}>
              {props.announcement.budget.toLocaleString()}-PKR
            </p>
            <p className={styles.optionDetailText}> Per Month </p>
          </div>
        </div>
        <div className={styles.timeOption}>
          <Clock className={styles.icon} color="#3E6C98" />
          <div className={styles.column}>
            <p className={styles.optionText}>
              {props.announcement.time}-
              {props.announcement.time === 1 ? 'Hour' : 'Hours'}
            </p>
            <p className={styles.optionDetailText}> Per Day </p>
          </div>
        </div>
      </div>
    </div>
  );
}
