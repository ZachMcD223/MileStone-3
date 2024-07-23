import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import SignUpForm from './components/users/SignUpForm';
import LoginForm from './components/users/LoginForm';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/sign-up">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/sign-in">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
      </header>
      <main>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/menu" element={<Menu />} />
         <Route path="/sign-up" element={<SignUpForm />} />
         <Route path="/sign-in" element={<LoginForm />} />
         <Route path="/cart" element={<Cart />} />
      </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;
