import AdminReview from '../Review/AdminReview';

export default function AdminReviews(props) {
  return (
    <div className="adminSection">
      <h1 className="adminHeading">All Reviews</h1>
      {props.reviews.length > 0 ? (
        <div className="adminList">
          {props.reviews?.map((review) => (
            <AdminReview key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <p className="noRecords">No Reviews Yet</p>
      )}
    </div>
  );
}
