import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';
import ReviewCard from '../InnerComponents/ReviewCard';
import TopReviewCard from '../InnerComponents/TopReviewCard';
import Err from '../../pages/Err';

const DisplayByCat = () => {
  const [reviewsFilterCat, setReviewsFilterCat] = useState([]);
  const { category } = useParams();
  const [isError, setErr] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://martinswdev-be-nc-games.herokuapp.com/api/reviews?category=${category}`
      )
      .then(({ data }) => {
        setReviewsFilterCat(data.reviews);
      })
      .catch(() => setErr(true));
  }, [category]);

  return (
    <main key={uuid()} className="main">
      <TopReviewCard category={category} />
      {reviewsFilterCat.map((item) => {
        return <ReviewCard key={uuid()} className="review" item={item} />;
      })}
      {isError ? <Err /> : ''}
    </main>
  );
};
export default DisplayByCat;
