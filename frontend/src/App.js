import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SignUpForm from "./components/users/SignUpForm";
import LoginForm from "./components/users/LoginForm";
import CurrentCustomer from "./components/contexts/CurrentCustomer";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import "./App.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="customers/sign-up" element={<SignUpForm />} />
            <Route path="customers/sign-in" element={<LoginForm />} />
            <Route path="customers/profile" element={<CurrentCustomer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
