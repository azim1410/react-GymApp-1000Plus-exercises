import React from 'react'
import {Stack, Typography} from '@mui/material'
const BodyPartCard = ({item, setBodyPart, BodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    // className="bodyPart-card"
    sx={{
        borderRadius:'30px',
        marginBottom:'10px',
        border: '2px solid black',
        borderTop: {BodyPart} === item ? '4px solid Red' : '',
        backgroundColor:'Black',
        width:'100px',
        height:'40px',
        cursor:'pointer',
        
    }}
    onClick={()=>{
        setBodyPart(item);
        window.scrollTo({top:1800, left:100, behavior:'smooth'})
    }}
    >
       <Typography display="flex" color="white" fontWeight="bold" fontSize="15px" >{item} </Typography>

    </Stack>
  )
}

export default BodyPartCard