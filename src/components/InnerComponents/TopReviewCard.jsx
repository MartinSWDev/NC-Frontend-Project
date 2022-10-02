import { useSearchParams } from 'react-router-dom';
import uuid from 'react-uuid';
import chess from '../../assets/img/home-game.png';
import { capCatWithSpace } from '../../utils/functions.js';

import './TopReviewCard.css';

const TopReviewCard = () => {
  const [searchParams] = useSearchParams();
  return (
    <div key={uuid()} className="reviewcard topreviewcard loadable">
      <img
        src={chess}
        alt={'knight chess piece'}
        className="topreviewcard__img"
      />
      <div className="topreviewcard__text">
        <h2>Currently Viewing</h2>
        <p>
          Game Reviews:{' '}
          {searchParams.has('category' || 'sort_by' || 'order')
            ? capCatWithSpace(searchParams.get('category'))
            : 'All'}
        </p>
        <p>
          {searchParams.has('sort_by')
            ? 'Sort By: ' + capCatWithSpace(searchParams.get('sort_by'))
            : ''}
        </p>
        <p>
          {searchParams.has('order')
            ? 'Order: ' + capCatWithSpace(searchParams.get('order'))
            : ''}
        </p>
      </div>
    </div>
  );
};

export default TopReviewCard;
