import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Topics = ({ articles, setLoading }) => {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState('');
  const [articlesByTopic, setArticlesByTopics] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch('https://northcoders-news.herokuapp.com/api/topics')
      .then((response) => response.json())
      .then((body) => {
        setTopics(body.topics);
      });
    setLoading(false);
  }, [setLoading]);

  const getTopic = (event) => {
    const topicArticles = [];
    const topic = event.target.textContent;

    articles.forEach((article) => {
      if (article.topic === topic) {
        topicArticles.push(article);
        return topicArticles;
      }
    });
    //make the component on line 42 and move this function into it
  };

  return (
    <div>
      <ul>
        {topics.map((topic) => (
          <Link onClick={getTopic}>
            <li>{topic.slug}</li>
          </Link>
        ))}
      </ul>
      <ArticlesByTopic />
    </div>
  );
};

export default Topics;
