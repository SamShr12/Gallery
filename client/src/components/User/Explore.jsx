import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Req/Nav'
import MasonryLayout from './Blog/MasonryLayout'
import test from '../../../image/test2.jpg'

function Explore() {
  return (
    <section>
        <Nav />

        <section className='w-80'>

            <div className='tagsection mt-10'>
                <div className='flex gap-2'>
                    <Link>
                        <div className='border border-solid border-[#ccc] px-3 py-2 text-sm rounded'>bacground</div>
                    </Link>
                    <Link>
                        <div className='border border-solid border-[#ccc] px-3 py-2 text-sm rounded'>bacground</div>
                    </Link>
                    
                </div>
            </div>

            <div className='mt-10'>
                <div className='mb-16'>
                    <div className='grid-5'>
                       <div className='sjowq'>
                            <img src={test} alt="" />
                        </div>
                        <div className='sjowq'>
                            <img src={test} alt="" />
                        </div> 
                        <div className='sjowq'>
                            <img src={test} alt="" />
                        </div>  
                        <div className='sjowq'>
                            <img src={test} alt="" />
                        </div> 
                        <div className='sjowq'>
                            <img src={test} alt="" />
                        </div> 
                    </div>
                </div>
                <MasonryLayout />
            </div>

        </section>
    </section>
  )
}

export default Explore