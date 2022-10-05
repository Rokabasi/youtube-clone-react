import '../styles/header.css'
import { AccountInfosContext } from '../context/AccountContext'
import { useContext } from 'react'
import Login from './Login'


export default function Header (){
   
    const {imgUrl} = useContext(AccountInfosContext)
    sessionStorage.setItem('item', imgUrl)
    const itemImg = JSON.parse(localStorage.getItem('itemImg'))
    console.log(itemImg);
    // console.log(itemImg);

   
   
    return (
        <header>
            <h1>R Stream</h1>
            <div className='search-input'>
                <input className='input-field' type="text" placeholder='Search'/>
                <button className='button-search' type="submit"><i className="fa fa-search"></i></button>
            </div>
            <div className='my-icons'>
            <i className="fa-sharp fa-regular fa-moon fa-2x"></i>
                <i className="fa-regular fa-bell fa-2x"></i>
            </div>
            {/* <Login/> */}
                <div><img src={itemImg} alt='profil' className="count-img"/></div>
        </header>
    )
}