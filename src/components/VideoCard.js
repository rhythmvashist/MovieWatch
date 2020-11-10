import React,{useContext} from "react";
import {GlobalContext} from "../Context/GlobalState";
import TextTruncate from "react-text-truncate";
import "./style/VideoCard.css";
import ThumbUpAltTwoToneIcon from "@material-ui/icons/ThumbUpAltTwoTone";


import {IoIosAdd} from 'react-icons/io'
import {FiCheck} from 'react-icons/fi'

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
  const {addMovieToList,watchlist} = useContext(GlobalContext);

  let storedMovie = watchlist.filter(obj => obj.id === movie.id)
  const disableMovie = storedMovie.length > 0 ? true : false;

  
  const handleClick = (movie) => {
    addMovieToList(movie)

  };

  return (
    <div className="videocard">
      {(movie.backdrop_path || movie.poster_path) && (
        <img
          src={`${imageBaseUrl}${movie.backdrop_path || movie.poster_path}`}
          alt="Movie Thumbnail"
        />
      )}
      {/* Using text truncate library to truncate the text  */}
      <TextTruncate line={1} element="p" truncate="..." text={movie.overview} />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="stats">
        {/* Only show when movie type is available*/}
        <div>
          {movie.media_type && `${movie.media_type} -`}
          {movie.release_date || movie.first_air_date} -{" "}
          <ThumbUpAltTwoToneIcon /> {movie.vote_count}
        </div>
        {!disableMovie ? (
          <IoIosAdd
            className="btn addbtn"
            size="35px"
            onClick={() => handleClick(movie)}
          />
        ) : (
          <FiCheck disabled={true} size="28px" className="btn endbtn" />
        )}
      </p>
    </div>
  );
}

export default VideoCard;
