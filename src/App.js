import SideBar from './Components/SideBar';
import Main from './Components/Content';
import Header from './Components/Header';
import Subscription from './Components/Subscription';
import Login from './Components/Login';
import {  Routes,Route, Link } from 'react-router-dom';
import subscription from './Components/Subscription';

import "./styles/App.css"

function App() {
  return (
    <div className="App">
      {/* <SideBar/>
      <Header/>
      <Routes>
        <Route path='/'element={<Main/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
      </Routes> */}
        {/* <Login/> */}
        {/* <Main/> */}
        {/* <Main/>
        <Link to='/' ></Link> */}
        {/* <Login/> */}
        <Subscription/>
        {/* <Link to="/main"><Login/></Link> */}
    </div>
  );
}

export default App;
