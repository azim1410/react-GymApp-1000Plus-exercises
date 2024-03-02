import React from 'react'
import { useNavigate } from 'react-router-dom'

const Push = () => {
    const navigate = useNavigate();
    return (
        <div className="routine">
            <div className="rhead">
                <h1>Push Day - 1</h1>
                <button className='gobackbtn' onClick={() => navigate(-1) }>◀</button>
            </div>
            <div className="rbody">
                <div className="movement">
                    <h2>Chest</h2>
                    <h3>Barbell Movement</h3>
                    <p>(Flat / Inclined)</p>
                    <div className="disc">
                        <p>Flat press + declined flies</p>
                        <p>2 heavy Sets (6-8) reps & 1 Back off Set aim for more (10-12) Reps </p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Shoulders</h2>
                    <h3>Shoulder press</h3>
                    <p>Seated - (Alterneted/both)</p>
                    <div className="disc">
                        <p>3 Working Set higher volume, (10-12) reps</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Chest</h2>
                    <h3>Any form of Chest Flies super set</h3>
                    <p>(upper / lower)</p>
                    <div className="disc">
                        <p>3 sets (10-12) reps for flies</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Shoulders</h2>
                    <h3>Lateral Raises</h3>
                    <p>Seated / Standing</p>
                    <div className="disc">
                        <p>4 Sets for (10-12) reps rest time under 1 minute</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Shoulders</h2>
                    <h3>Rear delts</h3>
                    <p>Machine / dumbbell</p>
                    <div className="disc">
                        <p>3 sets (10-12) reps</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Tricep</h2>
                    <h3>Extension / Push down</h3>
                    <p>Machine / dumbell</p>
                    <div className="disc">
                        <p>3 sets to failure</p>
                    </div>
                </div>


            </div>
            <div className="rhead">
                <h1>Push Day - 2</h1>
                <button className='gobackbtn' onClick={() => navigate(-1) }>◀</button>
            </div>
            <div className="rbody">
                <div className="movement">
                    <h2>Chest</h2>
                    <h3>Dumbbell Movement</h3>
                    <p>(Flat / Inclined)</p>
                    <div className="disc">
                        <p>(Inclined press + flat flies)</p>
                        <p>2 heavy Sets (6-8) reps & 1 Back off Set aim for more (10-12) Reps </p>
                    </div>
                </div>
                <div className="movement">
                    <h2>Shoulders</h2>
                    <h3>Barbell Movement</h3>
                    <p>(Standing)</p>
                    <div className="disc">
                        <p>3 Sets (10-12) reps</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Chest</h2>
                    <h3>Flies Movement</h3>
                    <p>(Machine)</p>
                    <div className="disc">
                        <p>3 Sets (10-12) reps</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Shoulders</h2>
                    <h3>Lateral Rais</h3>
                    <p>(Machine)</p>
                    <div className="disc">
                        <p>3 Sets (10-12) reps</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Shoulders</h2>
                    <h3> Rear delts Flies Movement</h3>
                    <p>(Machine)</p>
                    <div className="disc">
                        <p>3 Sets (10-12) reps</p>
                    </div>
                </div>
            </div>    


        </div>
    )
}

export default Push