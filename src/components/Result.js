import React,{useState,useEffect} from 'react'
import "./style/Result.css"
import VideoCard from './VideoCard'
import axios from "../axios";
import requests from './requests'

function Result() {
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        async function fetchData( ){
            const request = await axios.get(requests.fetchActionMovie);
            setMovies(request.data.results)
            return  request;
        }
        fetchData();
    },[])


    return (
        <div className="results">
            {movies.map(movie => (
                <VideoCard movie={movie}/>
            ))}
        </div>
    )
}

export default Result
