import React, { useState, useEffect } from "react";
import "./style/Result.css";
import VideoCard from "./VideoCard";
import axios from "../axios";
import YouTube from "react-youtube";
import PageCount from "./PageCount";

function Result({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  // const opts = {
  //     height: '390',
  //     width: '640',
  //     playerVars: {
  //       // https://developers.google.com/youtube/player_parameters
  //       autoplay: 1,
  //     },
  //   };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${selectedOption}&page=${page}`);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // if the genre changes then the page is reset to 1
    setPage(1);
  }, [selectedOption]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${selectedOption}&page=${page}`);
      setMovies(request.data.results);
      return request;
    }
    fetchData();

    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [page]);

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
    <div>
      <div className="results">
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </div>
      <PageCount pageNumber={page} setPageNumber={setPage} />
    </div>
  );
}

export default Result;
