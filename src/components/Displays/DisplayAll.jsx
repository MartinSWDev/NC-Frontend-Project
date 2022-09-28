import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import Votes from '../InnerComponents/Votes';
import { Link } from 'react-router-dom';
import ReviewCard from '../InnerComponents/ReviewCard';

const DisplayAll = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    axios
      .get('https://martinswdev-be-nc-games.herokuapp.com/api/reviews')
      .then(({ data }) => {
        setAllReviews(data.reviews);
      });
  }, []);

  return (
    <main key={uuid()} className="main">
      {allReviews.map((item) => {
        return (
          <ReviewCard item={item} key={uuid()} />
          // <div key={uuid()} className="review">
          //   <img
          //     src={item.review_img_url}
          //     alt={item.title}
          //     className="review__img"
          //   />
          //   <Link to={`/reviews/${item.review_id}`}>
          //     <h2>{item.title}</h2>
          //   </Link>
          //   <p>{item.category}</p>
          //   <p>{item.designer}</p>
          //   <p>{item.review_body} </p>
          //   <p>{item.created_at}</p>
          //   <Votes votes={item.votes} review_id={item.review_id} />
          // </div>
        );
      })}
    </main>
  );
};
export default DisplayAll;
