import React from 'react'
import "./style/Result.css"
import VideoCard from './VideoCard'

function Result() {
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
