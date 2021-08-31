import { useState } from "react";


const ReadArticle = (articles) => {
  const [singleArticle, setSingleArticle] = useState({})

// how to select single based from id

  return (
    <div>
      <p>THIS IS THE READ ARTICLE PAGE</p>
      <h2>{articles.title}</h2>
      <br />
      <h3>{articles.author}</h3>
      <br />
      <br />
      <p>{articles.body}</p>
    </div>
  );
};

export default ReadArticle;
