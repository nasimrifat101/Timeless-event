import PropTypes from 'prop-types';

const ReviewCard = ({ item }) => {
  const { name, review, date } = item;
  return (
    <div>
      <div className="card">
        <div className="card-body h-[400px]">
          <h2 className="card-title">{name}</h2>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
           
          </div>
          <p className="text-sm">{review}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCard;
