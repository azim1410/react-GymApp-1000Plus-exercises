import React from 'react'
import { useNavigate } from 'react-router-dom/dist'

const Pull = () => {
    const navigate = useNavigate()
  return (
    <div className="routine">
            <div className="rhead">
                <h1>Pull Day - 1</h1>
                <button className='gobackbtn' onClick={() => navigate(-1) }>◀</button>
            </div>
            <div className="rbody">
                <div className="movement">
                    <h2>Back</h2>
                    <h3>Lats</h3>
                    <p>(Lat pulldown)</p>
                    <div className="disc">
                        <p>2 warm up sets</p>
                        <p>3 Working heavy sets (8-10) reps</p>
                        <p>1 drop set</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Shrugs</h2>
                    <h3>traps</h3>
                    <p>(dumbell / barbell)</p>
                    <div className="disc">
                        <p>3 Working Set higher volume, (15) reps</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Lats</h2>
                    <h3>Bent over rows</h3>
                    <p>(T-bar / Barbell)</p>
                    <div className="disc">
                        <p>1 warm up sets</p>
                        <p>2 heavy sets (8-10) reps</p>
                        <p>1 back off set (12-15) reps</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Biceps</h2>
                    <h3>slight inclined seated dumbbell</h3>
                    <p></p>
                    <div className="disc">
                        <p>4 Sets for (10-12) reps</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Back</h2>
                    <h3>Pull ups</h3>
                    <p></p>
                    <div className="disc">
                        <p>3 sets to failure</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Biceps</h2>
                    <h3>EZ bar curls</h3>
                    <p>ez bar</p>
                    <div className="disc">
                        <p>2 sets 8-10 reps then 2 sets of 40 seconds sets</p>
                    </div>
                </div>


            </div>

            <div className="rhead">
                <h1>Pull Day - 2</h1>
                <button className='gobackbtn' onClick={() => navigate(-1) }>◀</button>
            </div>
            <div className="rbody">
                <div className="movement">
                    <h2>Back</h2>
                    <h3>Lats</h3>
                    <p>(pull ups)</p>
                    <div className="disc">
                        <p>3 sets till failure</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Back</h2>
                    <h3>Lats</h3>
                    <p>(Cable rowing for mid back)</p>
                    <div className="disc">
                        <p>3 sets slow</p>
                    </div>
                </div>
                <div className="movement">
                    <h2>Back</h2>
                    <h3>Lats</h3>
                    <p>(reverse grip rowing / pull down)</p>
                    <div className="disc">
                        <p>3 sets mid weight</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Biceps</h2>
                    <h3>concentration</h3>
                    <p>(seated dumbbell)</p>
                    <div className="disc">
                        <p>3 sets slow</p>
                    </div>
                </div>

                <div className="movement">
                    <h2>Biceps</h2>
                    <h3>drop set</h3>
                    <p>(cable with rod)</p>
                    <div className="disc">
                        <p>1 set high to low</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Pull