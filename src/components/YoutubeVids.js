import React from 'react';

const YoutubeVids = ({ videoId, title }) => {
    return (
        <div >
            <h2>Watch more {title} videos here</h2>
            <iframe className='example-card'
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allowFullScreen
            ></iframe>

            <iframe className='example-card'
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/wBNYccFR2MM`}
                title={title}
                frameBorder="0"
                allowFullScreen
            ></iframe>

            <iframe className='example-card'
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/wlBqzAnZWB4`}
                title={title}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YoutubeVids;
