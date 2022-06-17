import { useRouter } from 'next/router';
import AdminNav from '../Nav/AdminNav';
import Tabs from '../Tabs/Tabs';
import { ReactComponent as Pattern } from '../../assets/background pattern.svg';

export default function AdminLayout({ children }) {
  const { pathname } = useRouter();

  return (
    <>
      <div className={'background'}>
        <Pattern viewBox="0 0 100% 0" />
      </div>
      <AdminNav />
      {!(pathname === '/admin/signin') && <Tabs />}
      <main>{children}</main>
    </>
  );
}
