import styles from './Announcements.module.css';
import Announcement from '../Announcement/Announcement';

export default function Announcements(props) {
  return (
    <div className={styles.announcements}>
      <h1 className="adminHeading">All Announcements</h1>
      <div className={styles.list}>
        {props.announcements?.map((announcement, index) => (
          <Announcement key={index} announcement={announcement} />
        ))}
      </div>
    </div>
  );
}
