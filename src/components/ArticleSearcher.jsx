import { withRouter, Link } from 'react-router-dom';

const ArticleSearcher = ({searchTerm, articles}) => {
  const filteredResults = [];

  // const searchWord = props.location.state[0];
  // const articles = props.location.state[1];

  articles.forEach((article) => {
    if (article.title.includes(searchTerm)) {
      filteredResults.push(article);
    }
    return filteredResults;
  });

  if (filteredResults.length === 0) {
    return <p>{`No articles found with '${searchTerm}' in the title.`}</p>
  }
  return (
    <div>
      {filteredResults.map((x) => (
        <Link key={x.article_id} to={`/article/${x.article_id}`}>
          <li>
            {x.title}
            <br />
            {x.author}
            <br />
            {x.created_at}
          </li>
        </Link>
      ))}
    </div>
  );
};

export default withRouter(ArticleSearcher);
