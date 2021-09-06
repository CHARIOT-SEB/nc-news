import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReadArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  let likeCount = 0

  useEffect(() => {
    axios
      .get(`https://northcoders-news.herokuapp.com/api/articles/${id}`)
      .then((res) => {
        const a = res.data.article;
        setSingleArticle(a);
      });
  }, [id]);

  useEffect(() => {
    axios.get(`https://northcoders-news.herokuapp.com/api/articles/${id}/comments`)
    .then((res) => {
      setComments(res.data.comments)
      console.log(comments);
    })
  }, [id])



  return (
    <div>
      <h2>{singleArticle.title}</h2>
      <h3>Written by: {singleArticle.author}</h3>
      <p>{singleArticle.body}</p><br /><br />
      <p>
        Leave a comment here: 
      </p>
      <form >
        <input type="text" />
        <button type="submit" >Post Comment</button>
      </form>
      <p>Comments: {singleArticle.comment_count}</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>{comment.author + ": "}<br />
          {comment.body}<br />
          <button value="like">+1</button> Likes: {likeCount}
          <br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadArticle;
