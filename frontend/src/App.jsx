import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/'/>
          <Route path='/Menu' element={<Menu/>}/>
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
