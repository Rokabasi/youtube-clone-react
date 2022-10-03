import { Link } from 'react-router-dom'
import '../styles/sidebar.css'


export default function SideBar(){

    return(
        <div className='side-bar'>
            <div className='side-bar-header'>
                <div><i className="fa-solid fa-clapperboard fa-2x"></i></div>
                <h1>R Stream</h1>
                {/* <div className='side-bar-icon'><i className="fa-solid fa-bars fa-1x"></i></div> */}

            </div>
            <div>
                <ul>
                    <li><Link to="/"><div><i className="fa-solid fa fa-house"></i></div><h4>Home</h4></Link></li>
                    <li><Link><div><i className="fa-sharp fa fa-solid fa-chart-simple"></i></div><h4>Tranding</h4></Link></li>
                    <li><Link><div><i className="fa-sharp fa fa-solid fa-film"></i></div><h4>Dowloads</h4></Link></li>
                    <li><Link to='/subscription'><div><i className="fa-solid fa fa-arrow-right-from-bracket"></i></div><h4>Subscription</h4></Link></li>
                </ul>
            </div>
        </div>
    )
}