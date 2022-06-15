import Head from 'next/Head';
import AdminLayout from '../../components/Layouts/AdminLayout';

export default function ViewInquiries(props) {
  return (
    <>
      <Head>
        <title>Manage Announcements - Beacon Tutors Pakistan</title>
        <meta
          name="description"
          content="Meta description for the Admin View Inquiries page"
        />
      </Head>
      <h1>View Inquiries</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptas expedita ipsum molestias cumque quas amet nam, ab suscipit
        voluptates, sint dignissimos nulla maiores mollitia eum ullam beatae
        excepturi explicabo?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptas expedita ipsum molestias cumque quas amet nam, ab suscipit
        voluptates, sint dignissimos nulla maiores mollitia eum ullam beatae
        excepturi explicabo?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptas expedita ipsum molestias cumque quas amet nam, ab suscipit
        voluptates, sint dignissimos nulla maiores mollitia eum ullam beatae
        excepturi explicabo?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptas expedita ipsum molestias cumque quas amet nam, ab suscipit
        voluptates, sint dignissimos nulla maiores mollitia eum ullam beatae
        excepturi explicabo?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptas expedita ipsum molestias cumque quas amet nam, ab suscipit
        voluptates, sint dignissimos nulla maiores mollitia eum ullam beatae
        excepturi explicabo?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptas expedita ipsum molestias cumque quas amet nam, ab suscipit
        voluptates, sint dignissimos nulla maiores mollitia eum ullam beatae
        excepturi explicabo?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptas expedita ipsum molestias cumque quas amet nam, ab suscipit
        voluptates, sint dignissimos nulla maiores mollitia eum ullam beatae
        excepturi explicabo?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptas expedita ipsum molestias cumque quas amet nam, ab suscipit
        voluptates, sint dignissimos nulla maiores mollitia eum ullam beatae
        excepturi explicabo?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        voluptas expedita ipsum molestias cumque quas amet nam, ab suscipit
        voluptates, sint dignissimos nulla maiores mollitia eum ullam beatae
        excepturi explicabo?
      </p>
    </>
  );
}

ViewInquiries.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
