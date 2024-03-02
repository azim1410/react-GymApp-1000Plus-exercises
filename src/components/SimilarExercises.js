import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'

const SimilarExercises = ({targetMuscleData , equipmentData}) => {
  return (
    <Box>
      <Typography variant='h3' mb="33px" >Similar Target Muscle Exercises</Typography>
      <Stack>
      {targetMuscleData.length!==0 ? <HorizontalScrollbar data={targetMuscleData}/> : "Data not available"}
      </Stack>
    </Box>

  )
}

export default SimilarExercises