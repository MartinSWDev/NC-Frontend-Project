import { faCircleDown, faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Votes = ({ votes, review_id }) => {
  const [displayVotes, setDisplayVotes] = useState(votes);
  const [voteChange, setVoteChange] = useState(0);
  const [skipInitial, setSkipInitial] = useState(true);
  const [voteErr, setVoteErr] = useState(null);

  const handleVote = (vote) => {
    if (vote > -2 && vote < 2) {
      setVoteChange(vote);
      setVoteErr(null);
      setDisplayVotes(displayVotes + vote);
    }
  };

  useEffect(
    () => {
      if (skipInitial) setSkipInitial(false);
      if (!skipInitial) {
        axios
          .patch(
            `https://martinswdev-be-nc-games.herokuapp.com/api/reviews/${review_id}`,
            {
              inc_votes: voteChange,
            }
          )
          .catch(() => setVoteErr(true));
      }
    },
    // eslint-disable-next-line
    [displayVotes]
  );

  return (
    <div>
      <FontAwesomeIcon icon={faCircleUp} onClick={() => handleVote(1)} />
      <p>{displayVotes}</p>
      <FontAwesomeIcon icon={faCircleDown} onClick={() => handleVote(-1)} />
      {voteErr ? <p>Voting failed</p> : ''}
    </div>
  );
};
export default Votes;
