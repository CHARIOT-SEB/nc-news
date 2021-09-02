import { Link } from 'react-router-dom';

const BreakingNews = ({ articles, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (articles.length === 0) {
    return <p className="noArticles">no articles found</p>;
  }

  const dateFormatter = (dates) => {
    const x = new Date(dates);
    const formattedDate = x.toLocaleString();
    return formattedDate;
  };

  return (
    <div>
      <h3>Our most recent stories below...</h3>
      <h2>BREAKING NEWS</h2>
      <ul>
        {articles.map((article) => (
          <Link key={article.article_id} to={`/article/${article.article_id}`}>
            <li classname="recentNews">
              {article.title}
              <br />
              {article.topic}
              <br />
              {dateFormatter(article.created_at)}
              <br />
              <br />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BreakingNews;
