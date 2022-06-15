import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Tabs.module.css';

const Tab = (props) => (
  <Link href={props.href}>
    <a className={`${styles.tab} ${props.isSelected && styles.selected}`}>
      {props.title}
    </a>
  </Link>
);

export default function Tabs() {
  const { pathname } = useRouter();
  const isTabOneSelected = pathname == '/admin/manageannouncements';
  const isTabTwoSelected = pathname == '/admin/viewinquiries';

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div>
          <Tab
            href="/admin/manageannouncements"
            title="Manage Announcements"
            isSelected={isTabOneSelected}
          />
        </div>
        <div>
          <Tab
            href="/admin/viewinquiries"
            title="View Inquiries"
            isSelected={isTabTwoSelected}
          />
        </div>
      </div>
    </div>
  );
}
