import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import Votes from './Votes';
import { capCatWithSpace, isoDateTimeToDate } from '../../utils/functions.js';

const SingleReview = ({ item }) => {
  return (
    <div key={uuid()} className="review single">
      <p className={`review__category ${item.category} `}>
        {capCatWithSpace(item.category)}
      </p>
      <Link
        to={`/reviews/${item.review_id}`}
        style={{ textDecoration: 'none' }}
      >
        <h2 className="review-title">{item.title}</h2>
        <img
          src={item.review_img_url}
          alt={item.title}
          className="review__img"
        />
      </Link>
      <p className="review__body-single">{item.review_body} </p>
      <p className="review__designer">By {item.designer}</p>
      <p className="review__created">{isoDateTimeToDate(item.created_at)}</p>
      <Votes votes={item.votes} review_id={item.review_id} />
    </div>
  );
};

export default SingleReview;
