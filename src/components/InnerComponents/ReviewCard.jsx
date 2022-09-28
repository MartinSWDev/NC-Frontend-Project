import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import Votes from './Votes';

const ReviewCard = ({ item }) => {
  return (
    <div key={uuid()} className="review">
      <img src={item.review_img_url} alt={item.title} className="review__img" />
      <Link to={`/reviews/${item.review_id}`}>
        <h2>{item.title}</h2>
      </Link>
      <p>{item.category}</p>
      <p>{item.designer}</p>
      <p>{item.review_body} </p>
      <p>{item.created_at}</p>
      <Votes votes={item.votes} review_id={item.review_id} />
    </div>
  );
};

export default ReviewCard;
