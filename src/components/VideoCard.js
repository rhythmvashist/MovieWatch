import React from 'react'
import "./style/VideoCard.css"

function VideoCard({movie}) {
    return (
        <div className="videocard">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flazaruslair.files.wordpress.com%2F2018%2F01%2Fthe-tenant.jpg&f=1&nofb=1" alt=""/>
            <p>this is movei</p>
            <h2>Movie Title</h2>
            <p>no of likes</p>
        </div>
        
    )
}

export default VideoCard
