import '../styles/header.css'

export default function header (){

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
                <i className="fa-solid fa-circle-user fa-2x"></i>
            </div>
        </header>
    )
}