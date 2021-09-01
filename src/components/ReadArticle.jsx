import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReadArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://northcoders-news.herokuapp.com/api/articles/${id}`)
      .then((res) => {
        const a = res.data.article;
        setSingleArticle(a);
      });
  }, [id]);

// TO DO: 1, finish the load article by topic component
//        2, add like this article counter
//        3, start the account component


  return (
    <div>
      <h2>{singleArticle.title}</h2>
      <h3>Written by: {singleArticle.author}</h3>
      <p>{singleArticle.body}</p>
      <p>Comments: {singleArticle.comment_count}</p>
      <p>
        Leave a comment here: 
      </p>
      <form >
        <input type="text" />
        <button type="submit" >Post Comment</button>
      </form>
      <br />
      <br />
    </div>
  );
};

export default ReadArticle;
