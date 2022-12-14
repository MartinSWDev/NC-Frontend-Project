import axios from 'axios';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';

import './NewComment.css';

const NewComment = ({ review_id, showComments, setShowComments }) => {
  const [isPosted, setIsPosted] = useState(false);
  const [err, setErr] = useState(false);
  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const textToPost = e.target.elements.commentText.value;
    if (!user) {
      setErr(true);
    }
    axios
      .post(
        `https://martinswdev-be-nc-games.herokuapp.com/api/reviews/${review_id}/comments`,
        {
          username: user.username,
          body: textToPost,
        }
      )
      .then(({ data: { posted } }) => {
        setIsPosted(true);
        setErr(false);
        setShowComments(() => [posted, ...showComments]);
        e.target.elements.commentText.value = '';
      })
      .catch(() => {
        setIsPosted(false);
        setErr(true);
      });
  };

  return (
    <section className="newcomment">
      <form className="newcomment__form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="commentText">New Comment</label>
        <textarea id="commentText" required></textarea>
        <button>Post comment</button>
      </form>
      {isPosted ? <p>Comment Posted</p> : ''}
      {err ? <p>Comment not posted, are you logged in?</p> : ''}
    </section>
  );
};
export default NewComment;
