import React, { useState } from 'react'
import Exercises from '../components/Exercises';
import Navbar from '../components/Navbar';
import SearchExercises from '../components/SearchExercises';


const Home = () => {

    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    console.log(bodyPart);
    return (
        <div>
            <Navbar />
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
        </div>
    )

}

export default Home