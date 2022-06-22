import styles from './Testimonials.module.css';
import Testimonial from '../Testimonial/Testimonial';

export default function Testimonials(props) {
  return (
    <div className={styles.testimonials}>
      {[...Array(5)].map((testimonial, index) => (
        <Testimonial
          // image={testimonial.image}
          // username={testimonial.username}
          // rating={testimonial.rating}
          // description={testimonial.description}
        />
      ))}
    </div>
  );
}
