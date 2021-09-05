import { withRouter, Link } from 'react-router-dom';

const ArticleSearcher = (props) => {
  const filteredResults = [];
  const searchWord = props.location.state[0];
  const allArticles = props.location.state[1];

  allArticles.forEach((article) => {
    if (article.title.includes(searchWord)) {
      filteredResults.push(article);
      console.log(filteredResults);
    }
    return filteredResults;
  });

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
