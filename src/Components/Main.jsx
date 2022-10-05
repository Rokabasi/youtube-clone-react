import SideBar from "./SideBar"
import Content from "./Content"
import Header from "./Header"
import Login from "./Login"
import { AccountInfosContext } from '../context/AccountContext'
import { useContext } from 'react'

export default function Main (){

    const {imgUrl, loginState} = useContext(AccountInfosContext)
    return(
        <>
            { (loginState) ? 
            <div className="main-app">
                <SideBar/>
                <Header/>
                <Content/>
            </div> : null
            }
            
        
        </>
        
    )
}