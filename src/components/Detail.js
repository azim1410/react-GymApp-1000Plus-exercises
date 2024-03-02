import React from 'react'
import {Typography, Stack , Button} from "@mui/material";



const Detail = ({exerciseDetail}) => {

  const {bodyPart , gifUrl , name , target, equipment} = exerciseDetail;

  console.log(gifUrl);
  return (
    <Stack
    gap="60px" sx={{flexDirection : {lg: 'row'}, p:'20px', alignItems:'center'}}
    >

      <img className='exercise-card' src={gifUrl} alt={name} loading='Lazy' />
      <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
        <Typography variant="h2"  > 
          {name}
        </Typography>
        <Typography variant="h4">
          Perform {name} to target your {bodyPart} using {equipment} for {target} muscle.
        </Typography>
        
      </Stack>
    </Stack>
  )
}

export default Detail