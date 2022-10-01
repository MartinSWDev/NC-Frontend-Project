import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Select, { components } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../context/userContext';

const Landing = () => {
  const navigate = useNavigate();
  const [usernames, setUsernames] = useState([]);
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setUser({});
    axios
      .get(`https://martinswdev-be-nc-games.herokuapp.com/api/users`)
      .then(({ data }) => {
        setUserData(data.users);
        const options = data.users.map((user) => {
          return {
            name: user.username,
            label: user.username,
          };
        });
        setUsernames(options);
      })
      .catch();
  }, []);

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

  const handleUser = () => {
    for (const userN of userData) {
      if (userN.username === selectedUser) {
        setUser(userN);
        navigate('./reviews');
      }
    }
  };

  return (
    <motion.div
      className="landing"
      initial="hidden"
      animate="visible"
      exit="pageExit"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
        pageExit: {
          transition: { ease: 'easeIn' },
        },
      }}
    >
      <Select
        className="userSelect"
        styles={customStyles}
        options={usernames}
        getOptionValue={(option) => option.name}
        menuPlacement="top"
        onChange={(e) => setSelectedUser(e.name)}
        components={{ DropdownIndicator }}
        placeholder={<div>Select User</div>}
      />
      <button className="landing-btn" onClick={handleUser}>
        Login
      </button>
    </motion.div>
  );
};

export default Landing;
