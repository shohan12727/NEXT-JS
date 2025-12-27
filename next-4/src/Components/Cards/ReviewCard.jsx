const ReviewCard = ({ review }) => {
  return (
    <div className="max-w-md rounded-2xl border p-4 shadow-sm bg-white">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={review.photo}
          alt={review.user}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{review.user}</h3>
          <p className="text-sm text-gray-500">{review.email}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, index) => (
          <span key={index}>{index < review.rating ? "⭐" : "☆"}</span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-3 leading-relaxed">{review.review}</p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>👍 {review.likes.length} likes</span>
        <span>{new Date(review.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
