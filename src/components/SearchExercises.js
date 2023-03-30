import React from 'react'
import { useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import {Box, Stack} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({setExercises , bodyPart , setBodyPart}) => {

  const [search, setSearch] = useState('');

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      );
      console.log(searchedExercises);
      setSearch('');
      setExercises(searchedExercises);
    }

  }

  return (
    <div>
      <div className='upSec'>
        <h1>Search Exercises 🔍</h1>
        <br />
        <input className='Sinp' type="text" placeholder='  chest, abs, bicep, back .. ?'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button className='inpbtn' type='submit' onClick={handleSearch}>search</button>
      </div>
      <div className='Hsb'>
        <h2 className='bpl'>Examples to search from 👇</h2>
        <HorizontalScrollbar data ={bodyParts} bodyParts={bodyParts} setBodyParts={setBodyParts}/>
      </div>
    </div>
  )
}

export default SearchExercises