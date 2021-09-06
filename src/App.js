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
import ArticleSearcher from './components/ArticleSearcher';
import { useHistory } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

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

  useEffect(() => {
    console.log('helllo');
    history.push('/article-results')
  }, [searchTerm, history]);


  return (
    <div className="App">
      <Header />
      <NavBar />
      <SearchBar setSearchTerm={setSearchTerm} />
      <Switch>
        <Route exact path="/">
          <BreakingNews articles={articles} loading={loading} />
        </Route>
        <Route exact path="/topics">
          <Topics
            loading={loading}
            setLoading={setLoading}
            articles={articles}
          />
        </Route>
        <Route exact path="/account">
          <Account setLoading={setLoading} />
        </Route>
        <Route exact path="/article/:id">
          <ReadArticle />
        </Route>
        {/* <Route exact path="/article-results" component={ArticleSearcher} /> */}
        <Route exact path="/article-results">
          <ArticleSearcher searchTerm={searchTerm} articles={articles}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
