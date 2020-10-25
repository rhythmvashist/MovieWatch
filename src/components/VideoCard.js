import React from 'react'
import TextTruncate from 'react-text-truncate'
import "./style/VideoCard.css"
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const imageBaseUrl ="https://image.tmdb.org/t/p/original/";

function VideoCard({movie}) {
    return (
        <div className="videocard">
            <img src={`${imageBaseUrl}${movie.backdrop_path|| movie.poster_path}`} alt="Movie Thumbnail"/>
            
            <TextTruncate line={1} element='p' truncate ='...' text={movie.overview}/>
            <h2>{movie.title || movie.original_name}</h2>
            <p className='stats'>
            {/* only show when movie type is available*/}
                {movie.media_type && `${movie.media_type} -`}
                {movie.release_date||movie.first_air_date} -{" "} 
                <ThumbUpAltTwoToneIcon />{" "}{movie.vote_count}
                </p>
        </div>
        
    )
}

export default VideoCard
