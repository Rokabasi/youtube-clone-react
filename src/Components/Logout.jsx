import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = '757010538260-arnh8a0826kpi72fdqcb08fsp7agceiq.apps.googleusercontent.com' 

const Logout = () => {
    const onSuccess = () => {
        console.log('logout success');
    }

    return(
        <>
            <GoogleLogout
                clientId={clientId}
                button = {'log out'}
                onLogoutSuccess = {onSuccess}  
            />
        </>
    )
}
export  default Logout