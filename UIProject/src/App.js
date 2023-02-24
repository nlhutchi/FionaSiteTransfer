import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/header';
import Footer from './components/footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: "#14847c",
      white: "#FFFFFF",
      black: "#000000"
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router history={Router.browserHistory}>
          <Header/>
          <Routes>
            <Route path="" element={<HomePage/>} />
            <Route path="/About/" element={<div>About</div>} />
            <Route path="/LatestRecipes/" element={<div>Latest Recipes</div>} />
            <Route path="/LatestPoetry/" element={<div>Latest Poetry</div>} />
          </Routes>
          <Footer/>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
