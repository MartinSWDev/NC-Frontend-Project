import uuid from 'react-uuid';

const ReviewCard = ({ item }) => {
  return (
    <div key={uuid()} className="review">
      <img src={item.review_img_url} alt={item.title} className="review__img" />
      <h2>{item.title}</h2>
      <p>{item.category}</p>
      <p>{item.designer}</p>
      <p>{item.review_body} </p>
      <p>{item.created_at}</p>
      <p>Votes: {item.votes}</p>
    </div>
  );
};

export default ReviewCard;
