import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';

const DisplayAll = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    axios
      .get('https://martinswdev-be-nc-games.herokuapp.com/api/reviews')
      .then(({ data }) => {
        console.log(data.reviews);
        setAllReviews(data.reviews);
      });
  }, []);

  return (
    <main key={uuid()} className="displayAll-main">
      {allReviews.map((item) => {
        return (
          <div key={uuid()} className="displayAll-review">
            <img
              key={uuid()}
              src={item.review_img_url}
              alt={item.title}
              className="displayAll-review__img"
            />
            <h2 key={uuid()}>{item.title}</h2>
            <p key={uuid()}>{item.category}</p>
            <p key={uuid()}>{item.designer}</p>
            <p key={uuid()}>{item.review_body} </p>
            <p key={uuid()}>Votes: {item.votes}</p>
          </div>
        );
      })}
    </main>
  );
};
export default DisplayAll;
