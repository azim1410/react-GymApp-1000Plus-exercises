import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack , Typography, Box} from '@mui/material'
const ExerciseCard = ({exercise}) => {
  return (
    <Box >
    <Link 
    
    className='exercise-card' to={`/exercise/${exercise.id}`}
    >
      <img style={{width:"100%"}} src={exercise.gifUrl} alt={exercise.name} Loading="lazy"/>
      <Stack
      
      >
        <Button className='btnred'
          sx={{ml:'21px', color:'white', background:'red', fontsize:'10px', borderRadius:'20px' ,textTransform:'capitalize', textDecoration: 'none'}}>
            {exercise.bodyPart}
        </Button>
        <Button className='btnred'
          sx={{ml:'21px', color:'white', background:'red', fontsize:'10px', borderRadius:'20px' ,textTransform:'capitalize', textDecoration: 'none'}}>
            {exercise.equipment}
        </Button>
      </Stack>
      <Typography ml='21px' color='black' background="black" fontSize="20px" borderRadius="20px" textTransform='capitalize' mt="11px"  >{exercise.name}</Typography>
    </Link>
    </Box>
  )
}

export default ExerciseCard