import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Stack , Typography} from '@mui/material'
const ExerciseCard = ({exercise}) => {
  return (
    <Link
    className='exercise-card' to={`/exercise/${exercise.id}`}
    >
      <img style={{width:"100%"}} src={exercise.gifUrl} alt={exercise.name} Loading="lazy"/>
      <Stack
      direction="row"
      >
        <Button
          sx={{ml:'21px', color:'white', background:'red', fontsize:'10px', borderRadius:'20px' ,textTransform:'capitalize', textDecoration: 'none'}}>
            {exercise.bodyPart}
        </Button>
        <Button
          sx={{ml:'21px', color:'white', background:'red', fontsize:'10px', borderRadius:'20px' ,textTransform:'capitalize', textDecoration: 'none'}}>
            {exercise.equipment}
        </Button>
      </Stack>
      <Typography ml='21px' color='black' background="black" fontSize="20px" borderRadius="20px" textTransform='capitalize' mt="11px"  >{exercise.name}</Typography>
    </Link>
  )
}

export default ExerciseCard