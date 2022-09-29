import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
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
        return <ReviewCard item={item} key={uuid()} />;
      })}
    </main>
  );
};
export default DisplayAll;
