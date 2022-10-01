import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

import { Link } from 'react-router-dom';

const UserInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="user-bar">
      {user ? (
        <img
          className="user-bar__img"
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
