import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Select, { components } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { capCatWithSpace } from '../../utils/functions';

const Nav = () => {
  const [order, setOrder] = useState([]);
  const [sort, setSort] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const acceptSortBy = [
    'owner',
    'title',
    'review_id',
    'category',
    'review_img_url',
    'created_at',
    'votes',
    'desginer',
    'comment_count',
  ];

  const sortOptions = acceptSortBy.map((sort) => {
    return {
      name: sort,
      label: capCatWithSpace(sort),
    };
  });

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
    navigate(`/categories/${categorySelected.name}`);
  };

  // const handleSort = (sortSelected) => {
  //   navigate(`/categories/${categorySelected.name}?${sortSelected}`);
  // };

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
      {/* <Select
        styles={customStyles}
        options={sortOptions}
        onChange={handleSelect}
        getOptionValue={(option) => option.name}
        menuPlacement="top"
        components={{ DropdownIndicator }}
        placeholder={<div>Sort by</div>}
      /> */}
      <Select
        styles={customStyles}
        options={categories}
        onChange={handleSelect}
        getOptionValue={(option) => option.name}
        menuPlacement="top"
        components={{ DropdownIndicator }}
        placeholder={<div>Category</div>}
      />
      <Link to={`/`} style={{ textDecoration: 'none' }}>
        <p className="nav_p">Login</p>
      </Link>
      <Link to={`/reviews`} style={{ textDecoration: 'none' }}>
        <p className="nav_p">Home</p>
      </Link>
    </nav>
  );
};
export default Nav;
