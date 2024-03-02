import React from 'react'
import { useEffect , useState } from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import {exerciseOptions , fetchData, youtubeOptions} from '../utils/fetchData';

import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'
import Navbar from '../components/Navbar';
// import YoutubeVids from '../components/YoutubeVids';
import ExerciseVideos from '../components/ExerciseVideos';
import YoutubeVids from '../components/YoutubeVids';

const ExerciseDetails = () =>{
    const[exerciseVideos, setExerciseVideos] = useState([]);
    const [exerciseDetail , setExerciseDetail] = useState({});
    const[targetMuscleExercise , setTargetMuscleExercise] = useState([]);
    const[equipmentData , setEquipmentData] = useState([]);
    const {id} = useParams();

    console.log(exerciseVideos);

    useEffect(() => {
        const fetchExercisesData = async() =>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com' ;
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            console.log(exerciseDetailData);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise` , youtubeOptions);
            // console.log(exerciseVideos);
            
            setExerciseVideos(exerciseVideosData.contents);


            const targetMuscleData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercise(targetMuscleData);
            const targetEquipmentData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentData(targetEquipmentData);
            
        }

        fetchExercisesData();

    }, [id]);
    return (
        <div>
            <Navbar />
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscleData={targetMuscleExercise} equipmentData={equipmentData}/>
            {/* <YoutubeVids videoId="gnTzk1yUHB4" title={exerciseDetail.name}/> */}
        </div>
    )
}

export default ExerciseDetails