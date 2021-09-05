import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Topics = ({ articles, setLoading }) => {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState('');
  const [articlesByTopic, setArticlesByTopics] = useState([]);

  const setTopicFromClick = (event) => {
    event.preventDefault();
    setTopic(event.target.innerText);
  };

  // get topics for topics list
  useEffect(() => {
    setLoading(true);
    fetch('https://northcoders-news.herokuapp.com/api/topics')
      .then((response) => response.json())
      .then((body) => {
        setTopics(body.topics);
      });
    setLoading(false);
  }, [setLoading]);

  // get articles by topic
  useEffect(() => {
    fetch(`https://northcoders-news.herokuapp.com/api/articles?topic=${topic}`)
      .then((response) => response.json())
      .then((body) => {
        setArticlesByTopics(body.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic]);

  return (
    <div>
      <h3>View articles by topic</h3>
      <ul>
        {topics.map((x) => (
          <Link to={`/topics/${topic}`}>
            <button className="topicButtons" onClick={setTopicFromClick}>
              {x.slug}
            </button>
          </Link>
        ))}
      </ul>
      <ul>
        {articlesByTopic.map((x) => (
          <Link key={x.article_id} to={`/article/${x.article_id}`}>
            <li className="articlesByTopic">{x.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
