import React from 'react'
import Nav from '../../Req/Nav'
import test from '../../../../image/test2.jpg'
import { Link } from 'react-router-dom'
import testprofileimage from '../../../../image/testprofileimage.png'

function Profile() {
  return (
    <section>
      <Nav />

      <div className='background-profile-cover'>
        <div className='profile-cover-illust'></div>
          <img src={test} alt="" />
        </div>
      <section className='w-80 '>
        <div className='flex gap-10 iuknbfkj'>
            <div className='profile-img'>
              <img src={testprofileimage} alt="" />
            </div>
            <div className='mt-10'>
              <h2 className='font-bold text-2xl'>Sam</h2>
              <p className='my-2'><strong>0</strong> Following</p>
              <p>Lorem ipsum dolor siriatur velit porro? Numquatiae ad nobis.</p>
            </div>
        </div>

        <section className='mt-24 mb-5'>
          <h2 className='font-bold text-3xl mb-5'>Illustrations</h2>
          <div className="grid-5">
            <Link>
            <div className='profile-sec-sd'>
              <img src={test} alt="" />
              <div className="inner-porfile-contents">
                <h2 className='font-bold text-[#273339] ml-1 mt-1'>GodOfArt</h2>
              </div>
            </div>
            </Link>
            <Link>
            <div className='profile-sec-sd'>
              <img src={test} alt="" />
              <div className="inner-porfile-contents">
                <h2 className='font-bold text-[#273339] ml-1 mt-1'>GodOfArt</h2>
              </div>
            </div>
            </Link>
            <Link>
            <div className='profile-sec-sd'>
              <img src={test} alt="" />
              <div className="inner-porfile-contents">
                <h2 className='font-bold text-[#273339] ml-1 mt-1'>GodOfArt</h2>
              </div>
            </div>
            </Link>
            <Link>
            <div className='profile-sec-sd'>
              <img src={test} alt="" />
              <div className="inner-porfile-contents">
                <h2 className='font-bold text-[#273339] ml-1 mt-1'>GodOfArt</h2>
              </div>
            </div>
            </Link>
            <Link>
            <div className='profile-sec-sd'>
              <img src={test} alt="" />
              <div className="inner-porfile-contents">
                <h2 className='font-bold text-[#273339] ml-1 mt-1'>GodOfArt</h2>
              </div>
            </div>
            </Link>
            <Link>
            <div className='profile-sec-sd'>
              <img src={test} alt="" />
              <div className="inner-porfile-contents">
                <h2 className='font-bold text-[#273339] ml-1 mt-1'>GodOfArt</h2>
              </div>
            </div>
            </Link>
          </div>
        </section>
      
      </section>
    </section>
  )
}

export default Profile