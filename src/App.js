import './App.css';
import { Header } from './Header';
import { MovieList } from './MovieList';
import { RandomButton } from './RandomButton';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Routes>
          <Route path='/filmFinder'>
            <Route path=':most' element={<MovieList />} />
            <Route path='' element={<RandomButton />} />
          </Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
