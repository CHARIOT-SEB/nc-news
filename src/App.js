import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import BreakingNews from './components/BreakingNews';
import Topics from './components/Topics';
import Account from './components/Account';
import { useState, useEffect } from 'react';
import './App.css';
import ReadArticle from './components/ReadArticle';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlePerPage] = useState(4);

  useEffect(() => {
    setLoading(true);
    fetch(`https://northcoders-news.herokuapp.com/api/articles`)
      .then((response) => response.json())
      .then((body) => {
        let array = body.articles;
        setArticles(array);
        setLoading(false);
      });
  }, []);

  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  return (
    <div className="App">
      <Header />
      <NavBar />
      <SearchBar setSearchTerm={setSearchTerm} />
      <Switch>
        <Route exact path="/">
          <BreakingNews articles={currentArticles} loading={loading} />
        </Route>
        <Route exact path="/topics">
          <Topics
            loading={loading}
            setLoading={setLoading}
            articles={articles}
          />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route exact path="/article/:id">
          <ReadArticle />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
