import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router history={Router.browserHistory}>
        <Header/>
        <Routes>
          <Route path="" element={<HomePage/>} />
          <Route path="/About/" element={<div>About</div>} />
          <Route path="/LatestRecipes/" element={<div>Latest Recipes</div>} />
          <Route path="/LatestPoetry/" element={<div>Latest Poetry</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
