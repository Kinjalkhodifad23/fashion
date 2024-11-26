import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Shop from './Shop';
import Page from './Page';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/page' element={<Page/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
);


