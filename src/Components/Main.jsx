import { useEffect, useState } from "react"
import "../styles/main.css"
import Header from "./Header"
import VideoCritere from "./VideoCritere"
import love from  "../images/love.jpg"


export default function Main () {
    
    // const [video, setVideo] = useState([])
    
    // let myUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=FR&key=AIzaSyCooIkgsCtLXA6x49lZwQ5u1xBhCZlfJr0' 
    // let mykey = 'AIzaSyCooIkgsCtLXA6x49lZwQ5u1xBhCZlfJr0'
    
    // useEffect(()=>{
    //     fetch(myUrl)
    //     .then(res => res.json())
    //     .then(data => {
    //         setVideo(data)})
    // },[]);

    // console.log(video)

    return(
        <div className="main">
            <Header/>
            <VideoCritere/>
            <main className="card-main">
                <div className="card">
                    <img src={love} alt="" className="card-image"/>
                    <h3>Love don't cost a thing</h3>
                    <div className="chanel-info">
                        <i className="fa-solid fa-circle-user fa-2x"></i>
                        <div className="chanel-info-details">
                            <h4>Les ninja de silikin village</h4>
                            <div className="chanel-info-details-more">
                                <h5>9778 K vues</h5><span> - </span><h5> il y a 3 mois</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card">
                    <img src={love} alt="" className="card-image"/>
                    <h3>Love don't cost a thing</h3>
                    <div className="chanel-info">
                        <i className="fa-solid fa-circle-user fa-2x"></i>
                        <div className="chanel-info-details">
                            <h4>Les ninja de silikin village</h4>
                            <div className="chanel-info-details-more">
                                <h5>9778 K vues</h5><span> - </span><h5> il y a 3 mois</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card">
                    <img src={love} alt="" className="card-image"/>
                    <h3>Love don't cost a thing</h3>
                    <div className="chanel-info">
                        <i className="fa-solid fa-circle-user fa-2x"></i>
                        <div className="chanel-info-details">
                            <h4>Les ninja de silikin village</h4>
                            <div className="chanel-info-details-more">
                                <h5>9778 K vues</h5><span> - </span><h5> il y a 3 mois</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card">
                    <img src={love} alt="" className="card-image"/>
                    <h3>Love don't cost a thing</h3>
                    <div className="chanel-info">
                        <i className="fa-solid fa-circle-user fa-2x"></i>
                        <div className="chanel-info-details">
                            <h4>Les ninja de silikin village</h4>
                            <div className="chanel-info-details-more">
                                <h5>9778 K vues</h5><span> - </span><h5> il y a 3 mois</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card">
                    <img src={love} alt="" className="card-image"/>
                    <h3>Love don't cost a thing</h3>
                    <div className="chanel-info">
                        <i className="fa-solid fa-circle-user fa-2x"></i>
                        <div className="chanel-info-details">
                            <h4>Les ninja de silikin village</h4>
                            <div className="chanel-info-details-more">
                                <h5>9778 K vues</h5><span> - </span><h5> il y a 3 mois</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card">
                    <img src={love} alt="" className="card-image"/>
                    <h3>Love don't cost a thing</h3>
                    <div className="chanel-info">
                        <i className="fa-solid fa-circle-user fa-2x"></i>
                        <div className="chanel-info-details">
                            <h4>Les ninja de silikin village</h4>
                            <div className="chanel-info-details-more">
                                <h5>9778 K vues</h5><span> - </span><h5> il y a 3 mois</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card">
                    <img src={love} alt="" className="card-image"/>
                    <h3>Love don't cost a thing</h3>
                    <div className="chanel-info">
                        <i className="fa-solid fa-circle-user fa-2x"></i>
                        <div className="chanel-info-details">
                            <h4>Les ninja de silikin village</h4>
                            <div className="chanel-info-details-more">
                                <h5>9778 K vues</h5><span> - </span><h5> il y a 3 mois</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card">
                    <img src={love} alt="" className="card-image"/>
                    <h3>Love don't cost a thing</h3>
                    <div className="chanel-info">
                        <i className="fa-solid fa-circle-user fa-2x"></i>
                        <div className="chanel-info-details">
                            <h4>Les ninja de silikin village</h4>
                            <div className="chanel-info-details-more">
                                <h5>9778 K vues</h5><span> - </span><h5> il y a 3 mois</h5>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
            
        </div>
    )
}