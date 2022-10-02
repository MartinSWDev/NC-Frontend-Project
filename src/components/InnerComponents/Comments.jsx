import axios from 'axios';
import { useContext, useEffect } from 'react';
import uuid from 'react-uuid';
import { UserContext } from '../../context/userContext';
import { isoDateTimeToDate } from '../../utils/functions';

import './Comments.css';

const Comments = ({ review_id, showComments, setShowComments }) => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(
        `https://martinswdev-be-nc-games.herokuapp.com/api/reviews/${review_id}/comments`
      )
      .then(({ data: comments }) => {
        setShowComments(comments.comments);
      });
  }, [review_id, setShowComments]);

  const handleDelete = (comment_id, comment) => {
    axios
      .delete(
        `https://martinswdev-be-nc-games.herokuapp.com/api/comments/${comment_id}`
      )
      .then(() => {
        setShowComments(showComments.filter((com) => com !== comment));
      });
  };

  return (
    <section className="comments__section">
      <h2>Comments</h2>
      {showComments.map((comment) => {
        return (
          <div key={uuid()} className="comments__card">
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <p>{isoDateTimeToDate(comment.created_at)}</p>
            {user ? (
              user.username === comment.author ? (
                <button
                  onClick={() => handleDelete(comment.comment_id, comment)}
                >
                  Delete
                </button>
              ) : (
                ''
              )
            ) : (
              ''
            )}
          </div>
        );
      })}
    </section>
  );
};
export default Comments;
