import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

import { Link } from 'react-router-dom';

import './UserInfo.css';

const UserInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="userinfo">
      {user ? (
        <img
          className="userinfo__img"
          src={user.avatar_url}
          alt={`${user.username} profile pic`}
        />
      ) : (
        ''
      )}
      {user ? <p className="review-title">Name: {user.name}</p> : ''}
      {user ? <p className="review-title">Username: {user.username}</p> : ''}
      <Link to={`/`} style={{ textDecoration: 'none', alignSelf: 'center' }}>
        <p className="nav_p">Logout</p>
      </Link>
    </div>
  );
};
export default UserInfo;
