import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';

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
        return (
          <div key={uuid()} className="review">
            <img
              src={item.review_img_url}
              alt={item.title}
              className="review__img"
            />
            <h2>{item.title}</h2>
            <p>{item.category}</p>
            <p>{item.designer}</p>
            <p>{item.review_body} </p>
            <p>{item.created_at}</p>
            <p>Votes: {item.votes}</p>
          </div>
        );
      })}
    </main>
  );
};
export default DisplayByCat;
