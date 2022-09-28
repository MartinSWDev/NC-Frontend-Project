import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import ReviewCard from '../InnerComponents/ReviewCard';
import { useParams } from 'react-router-dom';

const DisplayReview = () => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();
  const [ifError, setIfError] = useState(false);
  const [errorInfo, setErrorInfo] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://martinswdev-be-nc-games.herokuapp.com/api/reviews/${review_id}`
      )
      .then(({ data }) => {
        setReview([data.review]);
      })
      .catch((err) => {
        setIfError(true);
        setErrorInfo(err);
      });
  }, [review_id]);

  return (
    <main className="main">
      {review.map((item) => {
        return <ReviewCard item={item} key={uuid()} />;
      })}
      {ifError ? <h2>{errorInfo.response.data.msg}</h2> : ''}
    </main>
  );
};
export default DisplayReview;
