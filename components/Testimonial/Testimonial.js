import styles from './Testimonial.module.css';

export default function Testimonial(props) {
  return (
    <div className={styles.testimonial}>
      <p className={styles.description}>
        <span>“</span>I just wanted to share a quick note and let you know that
        you guys do a really good job. I'm glad I decided to work with you. It's
        really great how easy your websites are to update and manage.
      </p>
      <p className={styles.username}>- Some Guy</p>
    </div>
  );
}
