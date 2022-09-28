import { useEffect, useState } from "react"
import SideBar from "./SideBar"

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
        <div>
            <SideBar/>
        </div>
    )
}