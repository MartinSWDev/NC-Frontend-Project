import DisplayReview from '../components/Displays/DisplayReview';
import Header from '../components/Headers/Header';
import Hamburger from '../components/Nav/Hamburger';
import User from '../components/Nav/User';

const Review = () => {
  return (
    <div>
      <Header />
      <Hamburger />
      <User />
      <DisplayReview />
    </div>
  );
};

export default Review;
