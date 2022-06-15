import AdminNav from '../Nav/AdminNav';
import Tabs from '../Tabs/Tabs';
import { ReactComponent as Pattern } from '../../assets/background pattern.svg';

export default function AdminLayout({ children }) {
  return (
    <>
      <div className={'background'}>
        <Pattern viewBox="0 0 100% 0" />
      </div>
      <AdminNav />
      <Tabs />
      <main>{children}</main>
    </>
  );
}
