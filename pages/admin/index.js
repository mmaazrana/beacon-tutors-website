import Head from 'next/Head';
import AdminLayout from '../../components/Layouts/AdminLayout';

export default function Admin(props) {
  return (
    <>
      <Head>
        <title>Admin Panel - Beacon Tutors Pakistan</title>
        <meta
          name="description"
          content="Meta description for the Admin page"
        />
      </Head>
      <h1>Admin Panel</h1>
    </>
  );
}

Admin.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
