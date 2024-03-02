import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './utils/Home';
import MySplit from './components/MySplit';
import Push from './pages/Push';
import Pull from './pages/Pull';
import Legs from './pages/Legs';
import Arms from './pages/Arms';
import ExerciseDetails from './pages/ExerciseDetails';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/split" element={<MySplit />} />
        <Route path="split/push" element={<Push />} />
        <Route path="split/pull" element={<Pull />} />
        <Route path="split/legs" element={<Legs />} />
        <Route path="split/arms" element={<Arms />} />
        <Route path='exercise/:id' element={<ExerciseDetails />} />
      </Routes>
    </div>
  )
}

export default App