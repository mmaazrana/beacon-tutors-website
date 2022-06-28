import { useRouter } from 'next/router';
import AdminNav from '../Nav/AdminNav';
import Tabs from '../Tabs/Tabs';
import dynamic from 'next/dynamic';

export default function AdminLayout({ children }) {
  const { pathname } = useRouter();
  const Pattern = dynamic(() =>
    import('../../assets/background pattern.svg').then(
      (module) => module.ReactComponent
    )
  );

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
