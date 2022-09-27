import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';

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
    <main key={uuid()} className="displayAll-main">
      {allReviews.map((item) => {
        return (
          <div key={uuid()} className="displayAll-review">
            <img
              src={item.review_img_url}
              alt={item.title}
              className="displayAll-review__img"
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
export default DisplayAll;
