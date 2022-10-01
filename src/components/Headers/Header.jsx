import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <h1>NC Game Reviews</h1>
      {user ? (
        <img src={user.avatar_url} alt={`${user.username} profile pic`} />
      ) : (
        ''
      )}
    </header>
  );
};
export default Header;
