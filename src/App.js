import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import BreakingNews from './components/BreakingNews';
import Topics from './components/Topics';
import Account from './components/Account';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <SearchBar />
        <Switch>
          <Route exact path="/">
            <BreakingNews />
          </Route>
          <Route exact path="/topics">
            <Topics />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
