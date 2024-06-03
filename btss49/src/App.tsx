import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Product from './components/Product';
import Detail from './components/Detail';
import Header2 from './components/Header2';
import Admin from './components/Admin';
import Account from './components/Account';
import Product2 from './components/Product2';
import HomePage from './components/HomePage';
import CustomLink from './components/CustomLink';
import ListUser from './components/ListUser';
import UserDetail from './components/UserDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header2 />
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/list-users" element={<ListUser />} />
          <Route path="/user/:userId" element={<UserDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
