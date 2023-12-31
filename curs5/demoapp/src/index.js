import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Autor from './pages/Autor';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<App />} />
          <Route path='home' element={<Home />} />
          <Route path='Blog' element={<Blog />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Autor' element={<Autor />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
