import styles from './Announcement.module.css';
import { Calendar, Banknote, Clock } from 'lucide-react';

export default function Announcement(props) {
  return (
    <div className={styles.announcement}>
      <p className={styles.title}>{props.announcement.title}</p>
      <div className={styles.list}>
        {props.announcement.list.map((item, index) => (
          <div className={styles.listItem} key={index}>
            {(item.icon === 'Calendar' && <Calendar color="#FF6F66" />) ||
              (item.icon === 'CurrencyNote' && <Banknote color="#4FC3B1" />) ||
              (item.icon === 'Clock' && <Clock color="#3E6C98" />)}
            <p className={styles.listText}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
