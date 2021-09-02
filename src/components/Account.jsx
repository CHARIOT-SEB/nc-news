import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Account = () => {
  const [users, setUsers] = useState({});
  const [user, setUser] = useState({});
  const { username } = useParams();

  //show user - hardcoded for now
  useEffect(() => {
    fetch(`https://northcoders-news.herokuapp.com/api/users/jessjelly`)
      .then((response) => response.json())
      .then((body) => {
        setUser(body.user);
      });
  });

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <img src={user.avatar_url}></img>

      <ul>list articles by user</ul>
    </div>
  );
};

export default Account;
