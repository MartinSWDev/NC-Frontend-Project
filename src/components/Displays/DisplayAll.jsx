import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import ReviewCard from '../InnerComponents/ReviewCard';
import TopReviewCard from '../InnerComponents/TopReviewCard';
import { useSearchParams } from 'react-router-dom';

import './DisplayAll.css';

const DisplayAll = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [searchParams] = useSearchParams();
  const [ifError, setIfError] = useState(false);
  const [errorInfo, setErrorInfo] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://martinswdev-be-nc-games.herokuapp.com/api/reviews?${searchParams}`
      )
      .then(({ data }) => {
        setAllReviews(data.reviews);
      })
      .catch((err) => {
        setIfError(true);
        setErrorInfo(err);
      });
  }, [searchParams]);

  return (
    <main key={uuid()} className="main__all">
      {ifError ? (
        <h2 className="error">{errorInfo.response.data.msg}</h2>
      ) : (
        <TopReviewCard />
      )}
      {allReviews.map((item) => {
        return <ReviewCard item={item} key={uuid()} />;
      })}
    </main>
  );
};
export default DisplayAll;
