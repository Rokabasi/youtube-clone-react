import { Link } from 'react-router-dom'
import '../styles/sidebar.css'
import { GoogleLogout } from 'react-google-login'
import { useContext } from 'react'
import { AccountInfosContext } from '../context/AccountContext'
import { useState } from 'react'


export default function SideBar(){

    const {loginState,setLoginState} = useContext(AccountInfosContext)
    const clientId = '757010538260-arnh8a0826kpi72fdqcb08fsp7agceiq.apps.googleusercontent.com'
    const onSuccess = () => {
        console.log('logout success');
        setLoginState(false)
        console.log(loginState);
    }
    return(
        <div className='side-bar'>
            <div className='side-bar-header'>
                <div><i className="fa-solid fa-clapperboard fa-2x"></i></div>
                <h1>R Stream</h1>
                {/* <div className='side-bar-icon'><i className="fa-solid fa-bars fa-1x"></i></div> */}

            </div>
            <div>
                <ul>
                    <li><Link to="/main"><div><i className="fa-solid fa fa-house"></i></div><h4>Home</h4></Link></li>
                    <li><Link><div><i className="fa-sharp fa fa-solid fa-chart-simple"></i></div><h4>Tranding</h4></Link></li>
                    <li><Link><div><i className="fa-sharp fa fa-solid fa-film"></i></div><h4>Dowloads</h4></Link></li>
                    <li><Link to='/subscription'><div><i className="fa-solid fa fa-arrow-right-from-bracket"></i></div><h4>Subscription</h4></Link></li>
                    <li><Link to='/like'><div><i className="fa-solid fa fa-thumbs-up"></i></div><h4>Like</h4></Link></li>
                    <li><Link to='/dislike'><div><i className="fa-solid fa fa-thumbs-down"></i></div><h4>Dislike</h4></Link></li>
                    <li><Link to='/'><GoogleLogout  clientId={clientId}
                                        button = {'Se deconnecter'}
                                        onLogoutSuccess = {onSuccess}  
                                    />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}