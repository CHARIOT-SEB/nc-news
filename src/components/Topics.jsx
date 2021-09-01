import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Topics = ({ setLoading }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://northcoders-news.herokuapp.com/api/topics')
      .then((response) => response.json())
      .then((body) => {
        setTopics(body.topics);
      });
    setLoading(false);
  }, [setLoading]);

  console.log(topics);

  return (
    <div>
      <p>THIS IS THE TOPICS COMPONENT</p>
      <ul>
        {topics.map((topic) => (
          <Link>
            <li>{topic.slug}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
