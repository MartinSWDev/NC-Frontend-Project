import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { capCatWithSpace } from '../../utils/functions.js';
import { useState } from 'react';
import { motion } from 'framer-motion';

import './ReviewCard.css';

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
        className="reviewcard"
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
        <Link
          to={`/reviews/${item.review_id}`}
          style={{ textDecoration: 'none' }}
        >
          <img
            src={item.review_img_url}
            alt={item.title}
            className="reviewcard__img"
          />
          <div className="reviewcard__text">
            <h2 className="reviewcard__text__title">{item.title}</h2>
            <p className={`reviewcard__text__category ${item.category} `}>
              {capCatWithSpace(item.category)}
            </p>
            <p className="reviewcard__text__body">{item.review_body} </p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ReviewCard;
