import uuid from 'react-uuid';
import chess from '../../assets/img/home-game.png';
import { capCatWithSpace } from '../../utils/functions.js';

const TopReviewCard = ({ category }) => {
  return (
    <div key={uuid()} className="review top-review">
      <p className={`review__category welcome`}>Currently Viewing</p>
      <img src={chess} alt={'knight chess piece'} className="review__img" />
      <h2>Game Reviews: {category ? capCatWithSpace(category) : 'All'}</h2>
    </div>
  );
};

export default TopReviewCard;
