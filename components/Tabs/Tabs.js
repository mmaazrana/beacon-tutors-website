import { useRouter } from 'next/router';
import styles from './Tabs.module.css';
import Tab from './Tab';

export default function Tabs() {
  const { pathname } = useRouter();
  const isTabOneSelected = pathname === '/adminpanel/manageannouncements';
  const isTabTwoSelected = pathname === '/adminpanel/managereviews';
  const isTabThreeSelected = pathname === '/adminpanel/viewinquiries';
  const isTabFourSelected = pathname === '/adminpanel/approvereviews';

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <div>
          <Tab
            href="/adminpanel/manageannouncements"
            title="Announcements"
            isSelected={isTabOneSelected}
          />
        </div>
        <div>
          <Tab
            href="/adminpanel/managereviews"
            title="Reviews"
            isSelected={isTabTwoSelected}
          />
        </div>
        <div>
          <Tab
            href="/adminpanel/viewinquiries"
            title="Inquiries"
            isSelected={isTabThreeSelected}
          />
        </div>
        <div>
          <Tab
            href="/adminpanel/approvereviews"
            title="Approvals"
            isSelected={isTabFourSelected}
          />
        </div>
      </div>
    </div>
  );
}
