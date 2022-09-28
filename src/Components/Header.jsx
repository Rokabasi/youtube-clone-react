import '../styles/header.css'

export default function header (){

    return (
        <header>
            <div className='search-input'>
                <i className="fa solid fa-magnifying-glass icon"></i>
                <input className='input-field' type="text" placeholder='Search'/>
            </div>
            <div className='my-icons'>
            <i class="fa-sharp fa-solid fa-moon fa-2x"></i>
                <i class="fa-solid fa-video fa-2x"></i>
                <i class="fa-solid fa-bell fa-2x"></i>
                <i class="fa-solid fa-circle-user fa-2x"></i>
            </div>
        </header>
    )
}