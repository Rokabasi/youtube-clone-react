import '../styles/sidebar.css'


export default function SideBar(){

    return(
        <div className='side-bar'>
            <div className='side-bar-header'>
                <div><i class="fa-solid fa-clapperboard fa-2x"></i></div>
                <h1>R Stream</h1>
                <div className='side-bar-icon'><i class="fa-solid fa-bars fa-2x"></i></div>
            </div>
            <div>
                <ul>
                    <li><div><i class="fa-solid fa fa-house"></i></div>Home</li>
                    <li><div><i class="fa-sharp fa fa-solid fa-chart-simple"></i></div>Tranding</li>
                    <li><div><i class="fa-sharp fa fa-solid fa-film"></i></div>Dowloads</li>
                    <li><div><i class="fa-solid fa fa-arrow-right-from-bracket"></i></div>Subscription</li>
                </ul>
            </div>
        </div>
    )
}