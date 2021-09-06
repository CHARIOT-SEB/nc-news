import { Link } from 'react-router-dom';
import { useState } from 'react';

const ARTICLES_PER_PAGE = 4;

const BreakingNews = ({ articles, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE; 
  const onFinalPage = currentPage >= (articles.length / ARTICLES_PER_PAGE);

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

  const handlePagination = (pageChange) => {
    setCurrentPage(currentPage + pageChange);
  };

  return (
    <div>
      <h3>Our most recent stories below...</h3>
      <h2>BREAKING NEWS</h2>
      <ul>
        {articles
          .slice(indexOfFirstArticle, indexOfLastArticle)
          .map((article) => (
            <Link
              key={article.article_id}
              to={`/article/${article.article_id}`}
            >
              <li className="recentNews">
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
      <section>
        <button
          onClick={() => handlePagination(-1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        Page:{currentPage}
        <button onClick={() => handlePagination(+1)} disabled={onFinalPage}>{'>'}</button>
      </section>
    </div>
  );
};

export default BreakingNews;
