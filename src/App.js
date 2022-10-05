import Login from './Components/Login';
import "./styles/App.css"
import { Link, Route,Routes} from 'react-router-dom'
import { AccountInfosContext} from './context/AccountContext';
import Main from './Components/Main';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import Linked from './Components/Linked'

const clientId = '757010538260-arnh8a0826kpi72fdqcb08fsp7agceiq.apps.googleusercontent.com' 
function App() {
        const [loginState,setLoginState]=useState(false)
        const [imgUrl, setImgUrl] = useState ()
        const [accessToken, setAccessToken] = useState()
        useEffect(() => {
          function start() {
             gapi.client.init({
                clientId: clientId,
                scope: ''
             })
          }
          gapi.load('client: auth2', start)
       })
  return (
    <div className="App">
      <AccountInfosContext.Provider value={{imgUrl, setImgUrl,loginState,setLoginState, accessToken,setAccessToken}}>
        <Routes>
        <Route path='/'element={<Login/>} />
        <Route path='/main' element={<Main/>}/>
        <Route path='/linked' element={<Linked/>}/>
      </Routes>
    </AccountInfosContext.Provider>
    </div>
  );
}

export default App;
