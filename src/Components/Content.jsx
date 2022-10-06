import { useEffect, useState } from "react"
import "../styles/main.css"
import Header from "./Header"
import VideoCritere from "./VideoCritere"
import { AccountInfosContext } from '../context/AccountContext'
import { useContext } from 'react'
import { Link } from "react-router-dom"


export default function Content () {

    let newKey = 'AIzaSyBDohBOVS3nWevO-W-YcAKYJOrsmqJZ19k'
    
    const {accessToken}  = useContext(AccountInfosContext)
    const [video, setVideo] = useState([])
    const [title, setTitle] = useState("")
    const [playLists, setPlayLists] = useState([])
    
    let myUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=FR&key=AIzaSyAHHejPb4CHZYQCDhyb4dWDG4q7n1ZT-_E' 
    let mykey = 'AIzaSyCooIkgsCtLXA6x49lZwQ5u1xBhCZlfJr0'
    

    useEffect(()=>{
        fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=32&key=AIzaSyAWhMB1MsRJRjw4FkGU2OfZfSlW9YzcTHU',
        { method : 'GET',headers:new Headers({'Authorization': `Bearer ${accessToken}`})})     
        .then(res => res.json())
        .then(data => {
            setVideo(data.items)
            setTitle(data.items[0].id)})
    },[accessToken]);
        console.log(playLists);
    console.log(accessToken);
    console.log(video);

    return(
        <>
        <div className="main">
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