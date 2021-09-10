import React from 'react';
import './VideoCard.css';

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <h1>Hello</h1>
            <img src="https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg" alt=""/>
            <p>This is a film about coding</p>
            <h2>Movie Title</h2>
            <p>Number of likes</p>
        </div>
    )
}

export default VideoCard
