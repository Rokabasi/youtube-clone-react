import SideBar from './Components/SideBar';

import Main from './Components/Main';
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <SideBar/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
