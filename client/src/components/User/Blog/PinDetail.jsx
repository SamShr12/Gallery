import React from 'react'
import Nav from '../../Req/Nav'
import test from "../../../../image/test.jpg"
import test2 from "../../../../image/test2.jpg"
import testprofile from "../../../../image/testprofileimage.png"
import {FaShare} from 'react-icons/fa'
import { BsDownload, BsFillEyeFill } from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
function PinDetail() {
  return (
    <section>
        <Nav />

        <section className='w-80 pin-detail pt-5'>
            <div className='flex'>
                <div className='bac-cover'>
                    <img src={test} alt="" />

                    <div className='reactions flex gap-2 '>
                        <div>
                            <button class="flex text-3xl font-bold py-2 px-2 border-blue-700 hover:border-blue-500 border-radius-50">
                            <AiFillHeart className=' font-bold' />
                            </button>                        
                        </div>
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

                    <div className='tags flex gap-3 mt-5'>
                        <div className='border px-2 py-1 border-solid border-[#273339] rounded-lg font-semibold'>Creation</div>
                        <div className='border px-2 py-1 border-solid border-[#273339] rounded-lg font-semibold'>Cat</div>
                        <div className='border px-2 py-1 border-solid border-[#273339] rounded-lg font-semibold'>Background</div>
                    </div>

                    <div className='pin-detail-profile mt-14'>
                        <div className='flex sssvvkkkk'>
                            <img src={testprofile} alt="" />
                            <h2 className='font-bold mt-2 ml-4 text-lg'>Sam</h2>
                        </div>
                        <div className='flex profileimgheresub gap-2'>
                            <img src={test} alt="" />
                            <img src={test2} alt="" />
                            <img src={test} alt="" />
                            <img src={test2} alt="" />
                            <img src={test} alt="" />

                        </div>
                    </div>

                    <div className='comment-section mt-5'>
                        <h2 className='font-semibold mb-2 text-[#273339]'>Comments</h2>
                        <div className='flex'>
                            <input type="text" name="" id="" placeholder='Enter your comment...' />
                            <button className='submit-btn ml-4'>Send</button>
                        </div>
                        <div className='m1-chat-c1 mt-5'>
                            <div className='flex comment-profile-user'>
                                <img src={testprofile} alt="" />
                                <div className='user-comment-contents'>
                                    <h2 className='font-bold mt-1 ml-4'>Sam</h2>
                                    <p className='text-sm font-semibold ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi nostrum voluptatem voluptates optio fugiat sit placeat quibusdam? Iste facere hic corporis esse quod quis ipsam dolor sunt, placeat reiciendis?</p>
                                </div>
                            </div>
                            <div className='flex gap-3 ml-14 mt-3'>
                                    <p className='cursor-pointer text-[#3d7699] underline'>Edit</p>
                                    <p className='cursor-pointer text-[red] underline'>Delete</p>
                                </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>

        <section className='w-80 pt-12 pb-6'>
            <h2 className='text-3xl font-bold'>Similar Recommendation</h2>

            <div className='grid-5 mt-5'>
                <Link>
                <div className='recommended-contents'>
                    <img src={test2} alt="" />
                    <div className='recommend-contents'>
                        <h2 className='font-semibold text-lg ml-1'>Very Nice</h2>
                    </div>
                </div>
                </Link>
            </div>
        </section>
    </section>
  )
}

export default PinDetail