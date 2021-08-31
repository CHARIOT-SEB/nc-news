const BreakingNews = ({ articles }) => {
  const dateFormatter = (dates) => {
    let x = new Date(dates);
    let formattedDate = x.toGMTString();
    return formattedDate;
  };


  // limit amount of posts displayed (pagination??)

  return (
    <div>
      <h2>BREAKING NEWS</h2>
      <h3>Our most recent stories below...</h3>
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            {article.title} 
            <br />
            {dateFormatter(article.created_at)}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreakingNews;
