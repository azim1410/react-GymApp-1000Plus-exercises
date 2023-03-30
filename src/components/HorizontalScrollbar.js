import React from 'react'
import {Box, Stack} from '@mui/material'
// import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPartCard from './BodyPartCard'
import ExerciseCard from './ExerciseCard'
const HorizontalScrollbar = ({data, bodyParts, setBodyPart}) => {
    console.log(data)
  return (
    <div className='hsbtop' >
   
        {data.map((item) => (
            <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="1px 7px"
            alignItems="center"
            borderRadius="20px"
            
            >
              
            <BodyPartCard item={item} bodyPart={bodyParts} setBodyPart={setBodyPart}/>
            </Box>
        ))}
   
    </div>
  )
}

export default HorizontalScrollbar