import styles from './Testimonial.module.css';

export default function Testimonial(props) {
  return (
    <div className={styles.testimonial}>
      <div>Image</div>
      <div>
        <p className={styles.username}>Christine Stewart</p>
        <div className={styles.rating}>
          {[...Array(3)].map(() => (
            <span>star1</span>
          ))}
          {[...Array(5 - 3)].map(() => (
            <span>star2</span>
          ))}
        </div>
        <p className={styles.description}>
          <span>“</span>I just wanted to share a quick note and let you know
          that you guys do a really good job. I'm glad I decided to work with
          you. It's really great how easy your websites are to update and
          manage.
        </p>
      </div>
    </div>
  );
}
