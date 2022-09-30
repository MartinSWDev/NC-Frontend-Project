import { faCircleDown, faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';

const Votes = ({ votes, review_id }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [voteErr, setVoteErr] = useState(null);

  const displayVotes = votes + voteChange;

  const handleVote = (vote) => {
    if (vote > -2 && vote < 2) {
      setVoteChange(voteChange + vote);
      axios
        .patch(
          `https://martinswdev-be-nc-games.herokuapp.com/api/reviews/${review_id}`,
          {
            inc_votes: vote,
          }
        )
        .then(() => {
          setVoteErr(null);
        })
        .catch(() => {
          setVoteErr(true);
          setVoteChange(voteChange);
        });
    }
  };

  return (
    <div className="votes">
      <FontAwesomeIcon
        className="vote-icon-left"
        icon={faCircleUp}
        onClick={() => handleVote(1)}
      />
      <p className="vote-display">{displayVotes}</p>
      <FontAwesomeIcon
        className="vote-icon-right"
        icon={faCircleDown}
        onClick={() => handleVote(-1)}
      />
      {voteErr ? <p>Voting failed</p> : ''}
    </div>
  );
};
export default Votes;
