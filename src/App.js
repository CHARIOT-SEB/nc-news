import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import BreakingNews from './components/BreakingNews';
import Topics from './components/Topics';
import Account from './components/Account';
import { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);

   useEffect(() => {
     fetch(`https://northcoders-news.herokuapp.com/api/articles`)
       .then((response) => response.json())
       .then((body) => {
         console.log(body.articles);
         let array = body.articles;
         setArticles(array);
       });
   }, []);

  return (
    <div className="App">
        <Header />
        <NavBar />
        <SearchBar setSearchTerm={setSearchTerm}/>
        <Switch>
          <Route exact path="/">
            <BreakingNews articles={articles}/>
          </Route>
          <Route exact path="/topics">
            <Topics />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
        </Switch>
    </div>
  );
}

export default App;