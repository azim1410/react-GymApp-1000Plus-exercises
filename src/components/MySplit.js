import React from 'react'
import { useNavigate } from 'react-router-dom'

const MySplit = () => {
    const navigate = useNavigate();
  return (
    <div className="mysplit">
        <button onClick={() => navigate('push')}>Push</button>
        <button onClick={() => navigate('pull')}>Pull</button>
        <button onClick={() => navigate('legs')}>Legs</button>
        <button onClick={() => navigate('arms')}>Arms</button>
        <button className='gobackbtn' onClick={() => navigate(-1) }>go back</button>
    </div>
  )
}

export default MySplit