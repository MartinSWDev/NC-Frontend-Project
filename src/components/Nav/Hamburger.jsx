import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Nav from './Nav';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const handleTap = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => {
          handleTap();
        }}
        className="hamburger"
      />
      {open ? <Nav /> : ''}
    </div>
  );
};

export default Hamburger;
