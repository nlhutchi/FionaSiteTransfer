import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AppBar from './components/AppBar'
import {ThemeProvider} from '@material-ui/core/styles';
import Theme from './utilities/Theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          <AppBar/>
          <Switch>
            <Route exact path="/">
              <div>Home</div>
            </Route>
            <Route path="/About/">
              <div>About</div>
            </Route>
            <Route path="/ThemedWeek/">
              <div>Themed Week</div>
            </Route>
            <Route path="/LatestPosts/">
              <div>Latest Posts</div>
            </Route>
            <Route path="/ByMeal/">
              <div>By Meal</div>
            </Route>
            <Route path="/ByType/">
              <div>By Type</div>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
