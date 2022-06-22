import AdminTestimonial from '../Testimonial/AdminTestimonial';

export default function AdminTestimonials(props) {
  return (
    <div className="adminSection">
      <h1 className="adminHeading">All Testimonials</h1>
      <div className="adminList">
        {props.testimonials?.map((testimonial, index) => (
          <AdminTestimonial key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
