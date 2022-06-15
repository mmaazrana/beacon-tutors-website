import styles from './Working.module.css';

export default function Working(props) {
  return (
    <div
      className={`${styles.working} ${props.index % 2 === 1 && styles.right}`}
    >
      <div
        className={`${styles.content} ${props.index % 2 === 1 && styles.right}`}
      >
        <div>Illustration</div>
        <div>
          <h4>Submit Your Inquiry</h4>
          <p>
            Send us a brief description of your requirements by contacting on
            our official WhatsApp account or by giving us a call.
          </p>
        </div>
      </div>
    </div>
  );
}
