import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Select, { components } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { capCatWithSpace } from '../../utils/functions';

const Nav = () => {
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortData = [
    'owner',
    'title',
    'review_id',
    'category',
    'review_img_url',
    'created_at',
    'votes',
    'designer',
    'comment_count',
  ];

  const orderData = ['ASC', 'DESC'];

  const sort = sortData.map((data) => {
    return {
      name: data,
      label: capCatWithSpace(data),
    };
  });

  const order = orderData.map((data) => {
    return {
      name: data,
      label: capCatWithSpace(data),
    };
  });

  const location = useLocation();

  useEffect(() => {
    axios
      .get('https://martinswdev-be-nc-games.herokuapp.com/api/categories')
      .then(({ data }) => {
        const options = data.categories.map((category) => {
          return {
            name: category.slug,
            label: capCatWithSpace(category.slug),
          };
        });
        setCategories(options);
      });
  }, []);

  const handleSelect = (categorySelected) => {
    searchParams.set('category', categorySelected.name);
    setSearchParams(searchParams);
  };

  const handleSortBy = (sortBySelected) => {
    searchParams.set('sort_by', sortBySelected.name);
    setSearchParams(searchParams);
  };

  const handleOrder = (orderSelected) => {
    searchParams.set('order', orderSelected.name);
    setSearchParams(searchParams);
  };

  const darkAccent = '#6e5dcf';
  const customStyles = {
    container: (provided) => ({
      ...provided,
      margin: '0.5em 1em',
    }),
    control: (provided) => ({
      ...provided,
      border: 'none',
      backgroundColor: '#eaebed',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: darkAccent,
    }),
    indicatorSeperator: (provided) => ({
      ...provided,
      backgroundColor: darkAccent,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: darkAccent,
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <FontAwesomeIcon icon={faCaretUp} />
      </components.DropdownIndicator>
    );
  };
  return (
    <nav className="nav">
      <Link
        to={`/reviews`}
        style={{ textDecoration: 'none', alignSelf: 'center' }}
      >
        <p className="nav_p">Home</p>
      </Link>
      <Link to={`/`} style={{ textDecoration: 'none', alignSelf: 'center' }}>
        <p className="nav_p">Login</p>
      </Link>
      {location.pathname === '/reviews' ? (
        <Select
          styles={customStyles}
          options={categories}
          onChange={handleSelect}
          getOptionValue={(option) => option.name}
          components={{ DropdownIndicator }}
          menuPlacement="top"
          placeholder={<div>Category</div>}
        />
      ) : (
        ''
      )}
      {location.pathname === '/reviews' ? (
        <Select
          styles={customStyles}
          options={sort}
          onChange={handleSortBy}
          getOptionValue={(option) => option.name}
          components={{ DropdownIndicator }}
          menuPlacement="top"
          placeholder={<div>Sort By</div>}
        />
      ) : (
        ''
      )}
      {location.pathname === '/reviews' ? (
        <Select
          styles={customStyles}
          options={order}
          onChange={handleOrder}
          getOptionValue={(option) => option.name}
          components={{ DropdownIndicator }}
          menuPlacement="top"
          placeholder={<div>Order</div>}
        />
      ) : (
        ''
      )}
    </nav>
  );
};
export default Nav;
