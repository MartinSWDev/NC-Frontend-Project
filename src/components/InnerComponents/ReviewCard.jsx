import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import Votes from './Votes';
import { capCatWithSpace, isoDateTimeToDate } from '../../utils/functions.js';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ReviewCard = ({ item }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const cardLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  return (
    <div
      className={`${pulsing ? 'pulse' : ''} loadable`}
      style={{ width: '70%', background: '#ccc' }}
    >
      <motion.div
        key={uuid()}
        className="review"
        initial={{ height: '16rem', opacity: 0 }}
        animate={{
          height: imageLoading ? '16rem' : 'auto',
          opacity: imageLoading ? 0 : 1,
        }}
        transition={
          ({ height: { delay: 0, duration: 0.4 } },
          { opacity: { delay: 0.5, duration: 0.4 } })
        }
        onLoad={cardLoaded}
        width="100%"
      >
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
        <p className="review__body">{item.review_body} </p>
        <p className="review__designer">By {item.designer}</p>
        <p className="review__created">{isoDateTimeToDate(item.created_at)}</p>
        <Votes votes={item.votes} review_id={item.review_id} />
      </motion.div>
    </div>
  );
};

export default ReviewCard;
