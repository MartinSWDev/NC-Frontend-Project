import uuid from 'react-uuid';
import Votes from './Votes';
import { capCatWithSpace, isoDateTimeToDate } from '../../utils/functions.js';

import './SingleReview.css';

const SingleReview = ({ item }) => {
  return (
    <div key={uuid()} className="singlereview">
      <img
        src={item.review_img_url}
        alt={item.title}
        className="reviewcard__img singlereview__img"
      />
      <h2 className="singlereview__title">{item.title}</h2>
      <p className="singlereview__designer">By {item.designer}</p>
      <p className="singlereview__created">
        {isoDateTimeToDate(item.created_at)}
      </p>
      <p
        className={`reviewcard__text__category singlereview__category ${item.category} `}
      >
        {capCatWithSpace(item.category)}
      </p>
      <p className="singlereview__body">{item.review_body} </p>
      <Votes votes={item.votes} review_id={item.review_id} />
    </div>
  );
};

export default SingleReview;
