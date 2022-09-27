import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import ReviewCard from '../InnerComponents/ReviewCard';
import { useParams } from 'react-router-dom';

const DisplayReview = () => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://martinswdev-be-nc-games.herokuapp.com/api/reviews/${review_id}`
      )
      .then(({ data }) => {
        setReview([data.review]);
      });
  }, [review_id]);

  return (
    <main className="main">
      {review.map((item) => {
        return <ReviewCard item={item} key={uuid()} />;
      })}
    </main>
  );
};
export default DisplayReview;
