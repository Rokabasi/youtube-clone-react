import { useEffect, useState } from "react"
import "../styles/main.css"
import Header from "./Header"
import VideoCritere from "./VideoCritere"


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
            <main>
                <div className="card">
                    <img src="" alt="" className="card-image"/>
                    <h3>Comment avoir un sourire professionnel</h3>
                    <p></p>
                </div>
            </main>
        </div>
    )
}