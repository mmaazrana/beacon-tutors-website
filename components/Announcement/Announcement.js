import styles from './Announcement.module.css';
import Calendar from '../../assets/calendar.svg';
import CurrencyNote from '../../assets/currency-note.svg';
import Clock from '../../assets/clock.svg';

export default function Announcement(props) {
  return (
    <div className={styles.announcement}>
      <p className={styles.title}>{props.announcement.title}</p>
      <div className={styles.list}>
        {props.announcement.list.map((item, index) => (
          <div className={styles.listItem} key={index}>
            {(item.icon === 'Calendar' && <Calendar />) ||
              (item.icon === 'CurrencyNote' && <CurrencyNote />) ||
              (item.icon === 'Clock' && <Clock />)}
            <p className={styles.listText}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
