import axios from 'axios';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

const Comments = ({ review_id }) => {
  const [showComments, setShowComments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://martinswdev-be-nc-games.herokuapp.com/api/reviews/${review_id}/comments`
      )
      .then(({ data: comments }) => {
        setShowComments(comments.comments);
      })
      .catch();
  }, [review_id]);

  return (
    <section className="comments-section">
      <h2>Comments</h2>
      {showComments.map((comment) => {
        return (
          <div key={uuid()} className="comments-card">
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p>{comment.created_at}</p>
            {/* <p>Current Votes: {comment.votes}</p> */}
          </div>
        );
      })}
    </section>
  );
};
export default Comments;