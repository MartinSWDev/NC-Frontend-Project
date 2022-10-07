import { useEffect, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';
import Comments from '../InnerComponents/Comments';
import SingleReview from '../InnerComponents/SingleReview';
import NewComment from '../InnerComponents/NewComment';

const DisplayReview = ({ user }) => {
  const [review, setReview] = useState([]);
  const { review_id } = useParams();
  const [ifError, setIfError] = useState(false);
  const [errorInfo, setErrorInfo] = useState({});
  const [showComments, setShowComments] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://martinswdev-be-nc-games.herokuapp.com/api/reviews/${review_id}`
      )
      .then(({ data }) => {
        setReview([data.review]);
      })
      .catch((err) => {
        setIfError(true);
        setErrorInfo(err);
      });
  }, [review_id]);

  return (
    <main className="main__review">
      {review.map((item) => {
        return <SingleReview item={item} key={uuid()} />;
      })}
      {ifError ? <h2 className="error">{errorInfo.response.data.msg}</h2> : ''}
      {review.length > 0 ? (
        <NewComment
          review_id={review[0].review_id}
          user={user}
          setShowComments={setShowComments}
          showComments={showComments}
        />
      ) : (
        ''
      )}
      {review.length > 0 ? (
        <Comments
          review_id={review[0].review_id}
          setShowComments={setShowComments}
          showComments={showComments}
        />
      ) : (
        ''
      )}
    </main>
  );
};
export default DisplayReview;
