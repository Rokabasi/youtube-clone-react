import "../styles/login.css"
import "../styles/subscription.css"
import {GoogleLogin} from 'react-google-login'
import { gapi } from "gapi-script"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const clientId = '757010538260-arnh8a0826kpi72fdqcb08fsp7agceiq.apps.googleusercontent.com'
export default function Login (){
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: '757010538260-arnh8a0826kpi72fdqcb08fsp7agceiq.apps.googleusercontent.com',
                scope: ""
        });
        }
    gapi.load('client:auth2', start);
  });
      
    const onSuccess = (res) =>{
        console.log(res);
        console.log('sty');
    }
    const onFaillure = (res) =>{
        console.log(res);
    }
    return(
        <div>
              <div className="subscription">

                <Link to='/main'><GoogleLogin
            clientId={clientId}
            buttonText = "login with Google"
            onSuccess = {onSuccess}
            onFailure = {onFaillure}
            // isSignedIn = {true}
           /></Link>
           
        </div>
        
        </div>
    )
}