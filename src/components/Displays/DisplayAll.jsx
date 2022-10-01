import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import ReviewCard from '../InnerComponents/ReviewCard';
import TopReviewCard from '../InnerComponents/TopReviewCard';
import { useSearchParams } from 'react-router-dom';

const DisplayAll = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get(
        `https://martinswdev-be-nc-games.herokuapp.com/api/reviews?${searchParams}`
      )
      .then(({ data }) => {
        setAllReviews(data.reviews);
      });
  }, [searchParams]);

  return (
    <main key={uuid()} className="main">
      <TopReviewCard />
      {allReviews.map((item) => {
        return <ReviewCard item={item} key={uuid()} />;
      })}
    </main>
  );
};
export default DisplayAll;
