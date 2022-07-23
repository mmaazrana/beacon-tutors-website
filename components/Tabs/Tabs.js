import { useRouter } from 'next/router';
import styles from './Tabs.module.css';
import Tab from './Tab';

export default function Tabs() {
  const { pathname } = useRouter();
  const isTabOneSelected = pathname === '/adminpanel/announcements';
  const isTabTwoSelected = pathname === '/adminpanel/reviews';
  const isTabThreeSelected = pathname === '/adminpanel/inquiries';
  const isTabFourSelected = pathname === '/adminpanel/approvals';

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div>
          <Tab
            href="/adminpanel/announcements"
            title="Announcements"
            isSelected={isTabOneSelected}
          />
        </div>
        <div>
          <Tab
            href="/adminpanel/reviews"
            title="Reviews"
            isSelected={isTabTwoSelected}
          />
        </div>
        <div>
          <Tab
            href="/adminpanel/inquiries"
            title="Inquiries"
            isSelected={isTabThreeSelected}
          />
        </div>
        <div>
          <Tab
            href="/adminpanel/approvals"
            title="Approvals"
            isSelected={isTabFourSelected}
          />
        </div>
      </div>
    </div>
  );
}
