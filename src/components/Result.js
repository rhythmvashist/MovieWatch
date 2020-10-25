import React,{useState,useEffect} from 'react'
import "./style/Result.css"
import VideoCard from './VideoCard'
import axios from "../axios";
import YouTube from 'react-youtube';


function Result({selectedOption}) {
    const [movies,setMovies] = useState([]);
    

    useEffect(() => {
        async function fetchData( ){
            const request = await axios.get(selectedOption);
            setMovies(request.data.results)
            return  request;
        }
        fetchData();
    },[selectedOption])

    // const handleClick=(movie)=>{
    //     if(trailer){
    //         setTrailer('');
    //     }
    //     else{
    //         movieTrailer(movie?.name ||"")
    //         .then((url) => {
    //             const 
    //         })
    //     }

    // }
    return (
        <div className="results">
            {movies.map(movie => (
                <div>
                <VideoCard key={movie.id}  movie={movie}/>
                {/* <YouTube videoId={'XtMThy8QKqU'} opts={opts}/> */}
                </div>
                
            ))}
            
 
        </div>
    )
}

export default Result
