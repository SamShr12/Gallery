import React from 'react'
import { Link } from 'react-router-dom'

function Pin({pin}) {
  return (
    <section>
      <Link to={`/art/${pin.id}`}>
        <div className='illustrations'>
          <img className='w-full mt-2' src={pin.src} alt="" />
          <div className='pin-innercontent'>
            {/* <h2>{pin.name}</h2> */}
          </div>
          </div>
        </Link>
    </section>
  )
}

export default Pin