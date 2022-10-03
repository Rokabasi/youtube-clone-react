import { useEffect, useState } from "react"
import "../styles/main.css"
import Header from "./Header"
import VideoCritere from "./VideoCritere"


export default function Content () {

    let newKey = 'AIzaSyBDohBOVS3nWevO-W-YcAKYJOrsmqJZ19k'
    
    const [video, setVideo] = useState([])
    const [title, setTitle] = useState("")
    
    let myUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=FR&key=AIzaSyCooIkgsCtLXA6x49lZwQ5u1xBhCZlfJr0' 
    let mykey = 'AIzaSyCooIkgsCtLXA6x49lZwQ5u1xBhCZlfJr0'
    
    useEffect(()=>{
        fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=FR&key=AIzaSyCooIkgsCtLXA6x49lZwQ5u1xBhCZlfJr0' )
        .then(res => res.json())
        .then(data => {
            setVideo(data.items)
            setTitle(data.items[0].id)})
    },[]);
    console.log("romain",title);

    console.log(video)
    // console.log(video[0].snippet.title);

    return(
        <>
        <div className="main">
        {/* <Header/> */}
        <VideoCritere/>
            <main className="card-main">
                {
                    video.map((data, index) =>{
                        return (
                    <div key={index} className="card">
                        <img src={data.snippet.thumbnails.medium.url} alt="" className="card-image"/>
                        
                        <h3>{data.snippet.title}</h3>
                        <div className="chanel-info">
                            <i className="fa-solid fa-circle-user fa-2x"></i>
                            <div className="chanel-info-details">
                                <h4>{data.snippet.channelTitle}</h4>
                                <div className="chanel-info-details-more">
                                    <h5>{data.statistics.viewCount}</h5><span> - </span><h5>{data.snippet.publishedAt}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    } )
                }
                
            </main>
            
        </div>
        </>
    )
}