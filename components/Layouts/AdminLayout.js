import AdminNav from '../Nav/AdminNav';

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNav />
      <main>{children}</main>
    </>
  );
}
