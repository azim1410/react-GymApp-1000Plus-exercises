import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Loader from './Loader';


const ExerciseVideos =({exerciseVideos, name }) =>{
    console.log(exerciseVideos);

    if(!exerciseVideos.length > 1) <Loader />;
    
    return(
        <Box sx={{marginTop : {lg: '200px', xs: '20px'}}} p="20px">

            <Typography variant='h3' mb="33px">
                Watch <span style={{color:'#ff2625'}}>{name}</span> exercise videos
            </Typography>

            <Stack
            justifyContent="flex-start" flexWrap="wrap" alignItems="center" display="flex"
            sx={{
                flexDirection: {lg: 'row'},
                gap: {lg: '110px', xs: '0'}
            }}
            >

                {exerciseVideos?.slice(0,3)?.map((item, index) => (
                    <a 
                        key={index}
                        className="example-card"
                        href = {`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className='vidimg' src = {item.video.thumbnails[0].url} alt={item.video.title} />
                        <Typography variant="h5" color="#ff2625" weight="20px">{item.video.title} </Typography>
                    </a>
                    
                ))}

            </Stack>

        </Box>
    )
}

export default ExerciseVideos