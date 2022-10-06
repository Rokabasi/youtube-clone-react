import { useParams } from "react-router-dom"
import "../styles/playvideo.css"

export default function PlayVideo(){
    const {data} = useParams()
    console.log(data);
    return(
        <div className="play-video">
            <div>
                <img src="" alt=""/>

            </div>
            <div>
                <h1>Titre</h1>
            </div>
        </div>
    )
}