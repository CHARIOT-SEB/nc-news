import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
        console.log(articlesByTopic);
      });
  }, [topic, articlesByTopic]);

  return (
    <div>
      <ul>
        {topics.map((x) => (
          <Link to={`/topics/${topic}`}>
            <button className="topicButtons" onClick={setTopicFromClick}>{x.slug}</button>
          </Link>
        ))}
      </ul>
      <ul></ul>
    </div>
  );
};

export default Topics;
