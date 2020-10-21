import React,{useState} from 'react'
import "./style/Result.css"
import VideoCard from './VideoCard'
import axios from "../axios";
import requests from './requests'

function Result() {
    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData( ){
            const request = await axios.get(requests.)
        }


        fetchData();
    },[])
    return (
        <div className="results">
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    )
}

export default Result
