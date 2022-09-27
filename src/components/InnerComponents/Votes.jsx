import { faCircleDown, faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Votes = ({ votes, review_id }) => {
  const [displayVotes, setDisplayVotes] = useState(votes);
  const [voteChange, setVoteChange] = useState(0);
  const [skipInitial, setSkipInitial] = useState(true);
  const [voteErr, setVoteErr] = useState(null);

  const handleIncrease = () => {
    setDisplayVotes(displayVotes + 1);
    setVoteChange(1);
  };

  const handleDecrease = () => {
    setVoteChange(-1);
    setVoteErr(null);
    setDisplayVotes(displayVotes - 1);
  };

  useEffect(() => {
    if (skipInitial) setSkipInitial(false);
    if (!skipInitial) {
      axios
        .patch(
          `https://martinswdev-be-nc-games.herokuapp.com/api/reviews/${review_id}`,
          {
            inc_votes: voteChange,
          }
        )
        .then(({ data }) => {
          console.log(data);
        })
        .catch(() => setVoteErr(true));
    }
  }, [displayVotes]);

  return (
    <div>
      <FontAwesomeIcon icon={faCircleUp} onClick={handleIncrease} />
      <p>{displayVotes}</p>
      <FontAwesomeIcon icon={faCircleDown} onClick={handleDecrease} />
      {voteErr ? <p>Voting failed</p> : ''}
    </div>
  );
};
export default Votes;
