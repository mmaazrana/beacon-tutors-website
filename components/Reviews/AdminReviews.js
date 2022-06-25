import AdminReview from '../Review/AdminReview';

export default function AdminReviews(props) {
  return (
    <div className="adminSection">
      <h1 className="adminHeading">All Reviews</h1>
      <div className="adminList">
        {props.reviews?.map((review, index) => (
          <AdminReview key={index} review={review} />
        ))}
      </div>
    </div>
  );
}
