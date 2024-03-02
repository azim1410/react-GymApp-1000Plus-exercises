import React from 'react'
import { useNavigate } from 'react-router-dom'

const Legs = () => {

    const navigate = useNavigate();
  return (
    <div className="routine">
    <div className="rhead">
        <h1>Leg Day</h1>
        <button className='gobackbtn' onClick={() => navigate(-1) }>◀</button>
    </div>
    <div className="rbody">
        <div className="movement">
            <h2>Warm up</h2>
            <h3>Legs</h3>
            <p>Squats</p>
            <div className="disc">
                <p>3 sets 20 reps</p>
                
            </div>
        </div>

        <div className="movement">
            <h2>Legs</h2>
            <h3>total</h3>
            <p>Smith machine</p>
            <div className="disc">
                <p>3 Working Set higher volume, (8-10) reps</p>
            </div>
        </div>

        <div className="movement">
            <h2>Quads</h2>
            <h3>Legs extension</h3>
            <p>(Machine)</p>
            <div className="disc">
                <p>3 super sets (10-12) reps</p>
            </div>
        </div>

        <div className="movement">
            <h2>Press</h2>
            <h3>(leg press / hack squats)</h3>
            <p></p>
            <div className="disc">
                <p>3 Sets for (10-12) reps</p>
            </div>
        </div>

        <div className="movement">
            <h2>Hamstrings</h2>
            <h3>reverse extension</h3>
            <p>(machine)</p>
            <div className="disc">
                <p>3 sets</p>
            </div>
        </div>

        <div className="movement">
            <h2>Calves</h2>
            <h3>Standing + Seated</h3>
            <p></p>
            <div className="disc">
                <p>3 sets 30 reps standing</p>
                <p>2 sets 20 reps seated</p>
            </div>
        </div>


    </div>


</div>
  )
}

export default Legs