import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import  Header from './Components/Header';
import SideBar from './Components/SideBar';
import Main from './Components/Main';
import Subscription from './Components/Subscription';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    {/* <App />
    <SideBar/> */}
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    
  </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
