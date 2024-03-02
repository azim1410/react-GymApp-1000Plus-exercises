import React from 'react'
import { useNavigate } from 'react-router-dom/dist'

const Arms = () => {
    const navigate = useNavigate()
  return (
    <div className="routine">
    <div className="rhead">
        <h1>Arms Day</h1>
        <button className='gobackbtn' onClick={() => navigate(-1) }>◀</button>
    </div>
    <div className="rbody">
        <div className="movement">
            <h2>Tricep</h2>
            <h3>Push Downs</h3>
            <p>(Rope / rod)</p>
            <div className="disc">
                <p>3 Heavy Sets (12-15) reps</p>
            </div>
        </div>

        <div className="movement">
            <h2>Tricep</h2>
            <h3>Extension</h3>
            <p>(Overhead dumbbell / close grip bench / heavy dumbbell / skull crusher)</p>
            <div className="disc">
                <p>3 Working Set higher volume, (15) reps</p>
            </div>
        </div>

        <div className="movement">
            <h2>Bicep</h2>
            <h3>curls</h3>
            <p>(close or wide with EZ bar / dumbbell)</p>
            <div className="disc">
                <p>3 super sets</p>
                <p>supported or standing</p>
            </div>
        </div>

        <div className="movement">
            <h2>Biceps</h2>
            <h3>Hammer curls</h3>
            <p></p>
            <div className="disc">
                <p>3 super Sets for (10-12) reps</p>
            </div>
        </div>

        <div className="movement">
            <h2>Tricep</h2>
            <h3>push down</h3>
            <p>(single hand)</p>
            <div className="disc">
                <p>3 sets to failure</p>
            </div>
        </div>

        <div className="movement">
            <h2>Bicep Or Tricep</h2>
            <h3></h3>
            <p></p>
            <div className="disc">
                <p>concentration curls / bench dips 2 sets max</p>
            </div>
        </div>


    </div>
</div>
  )
}

export default Arms