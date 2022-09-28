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
        <div>
            <Header/>
            <VideoCritere/>
            <main>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos alias ad illo voluptatibus odit beatae cupiditate dolorum quis repudiandae reiciendis. Fugit dignissimos odit fuga vitae ut voluptatibus consequuntur illo. Et!</p>
            </main>
        </div>
    )
}