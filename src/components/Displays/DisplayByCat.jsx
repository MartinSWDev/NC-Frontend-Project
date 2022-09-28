import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';
import ReviewCard from '../InnerComponents/ReviewCard';

const DisplayByCat = () => {
  const [reviewsFilterCat, setReviewsFilterCat] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://martinswdev-be-nc-games.herokuapp.com/api/reviews?category=${category}`
      )
      .then(({ data }) => {
        setReviewsFilterCat(data.reviews);
      });
  }, [category]);

  return (
    <main key={uuid()} className="main">
      {reviewsFilterCat.map((item) => {
        return <ReviewCard key={uuid()} className="review" item={item} />;
      })}
    </main>
  );
};
export default DisplayByCat;
