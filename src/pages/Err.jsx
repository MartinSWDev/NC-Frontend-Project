import DisplayError from '../components/Displays/DisplayError';
import Header from '../components/Headers/Header';
import Hamburger from '../components/Nav/Hamburger';

const Err = () => {
  return (
    <div>
      <Header />
      <Hamburger />
      <DisplayError />
    </div>
  );
};

export default Err;
