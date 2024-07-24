import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import SignUpForm from './components/users/SignUpForm';
import LoginForm from './components/users/LoginForm';
import Cart from './components/Cart';
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <header>
      <Header/>
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
