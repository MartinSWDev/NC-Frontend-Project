import DisplayAll from '../components/Displays/DisplayAll';
import Header from '../components/Headers/Header';
import Hamburger from '../components/Nav/Hamburger';

const Home = () => {
  return (
    <div className="review-body">
      <Header />
      <Hamburger />
      <DisplayAll />
    </div>
  );
};

export default Home;
