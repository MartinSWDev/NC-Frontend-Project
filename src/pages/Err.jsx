import DisplayError from '../components/Displays/DisplayError';
import Header from '../components/Headers/Header';
import Hamburger from '../components/Nav/Hamburger';
import User from '../components/Nav/User';

const Err = () => {
  return (
    <div>
      <Header />
      <Hamburger />
      <User />
      <DisplayError />
    </div>
  );
};

export default Err;
