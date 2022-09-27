import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const Nav = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://martinswdev-be-nc-games.herokuapp.com/api/categories')
      .then(({ data }) => {
        const options = data.categories.map((category) => {
          return {
            name: category.slug,
            label: category.slug,
          };
        });
        setCategories(options);
      });
  }, []);

  const handleSelect = (categorySelected) => {
    navigate(`/categories/${categorySelected.name}`);
  };

  return (
    <nav>
      <Link to={`/`}>
        <p>Home</p>
      </Link>
      <Select
        options={categories}
        onChange={handleSelect}
        getOptionValue={(option) => option.name}
      />
    </nav>
  );
};
export default Nav;
