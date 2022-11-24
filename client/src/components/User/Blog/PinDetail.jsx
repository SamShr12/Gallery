import React from 'react'
import Nav from '../../Req/Nav'
import test from "../../../../image/test.jpg"
function PinDetail() {
  return (
    <section>
        <Nav />

        <section className='pin-detail'>
            <div className='flex'>
                <div className='bac-cover'>
                    <img src={test} alt="" />

                    <div className='reactions flex gap-2'>
                        <div>
                            Like
                        </div>
                        <div>
                            Share
                        </div>
                        <div>
                            Download
                        </div>
                    </div>

                    <div className='profiles-user-posted'>
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet deserunt quasi. Dolor ex laudantium sequi soluta, cum ipsum architecto, explicabo dicta inventore quas placeat. Neque repellat nam excepturi voluptate!</p>
                    </div>

                    <div className='interactions flex'>
                        <div className='views'>10000</div>
                        <div className='likes'>20000</div>
                    </div>

                    <div className='tags flex'>
                        <button>creation</button>
                        <button>Death</button>
                    </div>

                   
                </div>
            </div>
        </section>

        <section className=''>
            <h2>Similar Recommendation</h2>
        </section>
    </section>
  )
}

export default PinDetail