import Link from 'next/link';
import styles from './Tabs.module.css';

export default function Tab(props) {
  return (
    <Link href={props.href}>
      <a className={`${styles.tab} ${props.isSelected && styles.selected}`}>
        {props.title}
      </a>
    </Link>
  );
}
