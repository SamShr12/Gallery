import React from 'react'
import Nav from '../../Req/Nav'
import test from "../../../../image/test.jpg"
import {FaShare} from 'react-icons/fa'
import { BsDownload, BsFillEyeFill } from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
function PinDetail() {
  return (
    <section>
        <Nav />

        <section className='w-80 pin-detail'>
            <div className='flex'>
                <div className='bac-cover'>
                    <img src={test} alt="" />

                    <div className='reactions flex gap-2 text-right'>
                        <div>
                        <button class="flex text-3xl font-bold py-2 px-2 border-blue-700 hover:border-blue-500 border-radius-50">
                        <AiFillHeart className=' font-bold' />
                        </button>                        </div>
                        <div>
                        <button class="flex mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-blue-700 hover:border-blue-500 border-radius-50">
                        <FaShare className=' font-bold' />
                        </button>
                        </div>
                        <div>
                        <button class="flex mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-blue-700 hover:border-blue-500 border-radius-50">
                        <BsDownload className=' font-bold' />
                        </button>
                        </div>
                    </div>

                    <div className='profiles-user-posted mt-5'>
                        <h1 className='font-semibold text-2xl'>Hello World !</h1>
                        <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet deserunt quasi. Dolor ex laudantium sequi soluta, cum ipsum architecto, explicabo dicta inventore quas placeat. Neque repellat nam excepturi voluptate!</p>
                    </div>

                    <div className='interactions flex gap-5 mt-5'>
                        <div className='likes'>
                            <div className="flex gap-1">
                            <AiFillHeart className=' font-bold mt-1 text-xl text-[#273339]' />
                            <p className='text-[#273339] font-semibold'>100</p>
                            </div>
                        </div>
                        <div className='views'>
                            <div className='flex gap-1'>
                            <BsFillEyeFill className='mt-1 text-xl text-[#273339]' />
                            <p className='text-[#273339] font-semibold'>200</p>
                            </div>
                        </div>
                    </div>

                    <div className='tags flex'>
                        <button>creation</button>
                        <button>Death</button>
                    </div>

                   
                </div>
            </div>
        </section>

        <section className='w-80 pt-12 mb-5'>
            <h2 className='text-3xl font-bold'>Similar Recommendation</h2>

            <div className='grid-5 mt-5'>
                <div className='recommended-contents'>
                    <img src={test} alt="" />
                    <div className='recommend-contents'>
                        <h2 className='font-semibold text-lg'>Very Nice</h2>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default PinDetail