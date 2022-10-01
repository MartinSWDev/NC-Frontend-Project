import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import UserInfo from './UserInfo';

const User = () => {
  const { user } = useContext(UserContext);
  const [openUser, setOpenUser] = useState(false);

  const handleTap = () => {
    openUser ? setOpenUser(false) : setOpenUser(true);
  };

  return (
    <div>
      {user ? (
        <img
          className="user-img"
          src={user.avatar_url}
          alt={`${user.username} profile pic`}
          onClick={() => {
            handleTap();
          }}
        />
      ) : (
        ''
      )}
      {openUser ? <UserInfo /> : ''}
    </div>
  );
};

export default User;
