import DisplayByCat from '../components/Displays/DisplayByCat';
import Header from '../components/Headers/Header';
import Hamburger from '../components/Nav/Hamburger';

const FilterCategory = () => {
  return (
    <div>
      <Header />
      <Hamburger />
      <DisplayByCat />
    </div>
  );
};

export default FilterCategory;
