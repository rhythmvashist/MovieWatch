import React from "react";
import TextTruncate from "react-text-truncate";
import "./style/VideoCard.css";
import ThumbUpAltTwoToneIcon from "@material-ui/icons/ThumbUpAltTwoTone";
import AddToQueueRoundedIcon from "@material-ui/icons/AddToQueueRounded";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
  const handleClick = (movie) => {
    console.log(movie);
  };

  return (
    <div className="videocard">
      <img
        src={`${imageBaseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt="Movie Thumbnail"
      />
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
        <AddToQueueRoundedIcon
          onClick={() => handleClick(movie)}
          className="addbtn"
        />
      </p>
    </div>
  );
}

export default VideoCard;
