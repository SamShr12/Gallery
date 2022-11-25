import React from 'react'
import Nav from '../Req/Nav'
import test from '../../../image/test.jpg'
import test2 from '../../../image/test2.jpg'
import test3 from '../../../image/test3.jpg'
import test4 from '../../../image/test4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid,Autoplay,Lazy } from "swiper";
import "swiper/css/lazy";
import { Link } from 'react-router-dom'
import MasonryLayout from './Blog/MasonryLayout'

function Home() {
  return (
    <section>
      <Nav />

      <section className='sect-1 w-80'>
          <h1 className='capitalize text-featured mt-10'>Featured </h1>
          <Swiper
              slidesPerView={3}
               centeredSlides={true}
                loop={true}
                 lazy={true}
                 speed={2800}
                  autoplay={{
                  delay:4000,
                  disableOnInteraction:false,
                  }}
                   grid={{
                     rows:1,
                    }}
                    spaceBetween={0}
                      
                    modules={[Grid,Autoplay,Lazy]}
                    className="mySwipertwo">
                      <SwiperSlide>
                        <Link>
                        <div className='illust-featured'>
                          <img src={test2} alt="" />
                          <div className='inner-contents'>
                            <h2>Great Artwork</h2>
                            <div className='flex subprofile gap-2'>
                              <img src={test3} alt="" />
                              <p>Sam</p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Link>
                        <div className='illust-featured'>
                          <img src={test3} alt="" />
                          <div className='inner-contents'>
                            <h2>Great Artwork</h2>
                            <div className='flex subprofile gap-2'>
                              <img src={test3} alt="" />
                              <p>Sam</p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Link>
                        <div className='illust-featured'>
                          <img src={test4} alt="" />
                          <div className='inner-contents'>
                            <h2>Great Artwork</h2>
                            <div className='flex subprofile gap-2'>
                              <img src={test3} alt="" />
                              <p>Sam</p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Link>
                        <div className='illust-featured'>
                          <img src={test} alt="" />
                          <div className='inner-contents'>
                            <h2>Great Artwork</h2>
                            <div className='flex subprofile gap-2'>
                              <img src={test3} alt="" />
                              <p>Sam</p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      </SwiperSlide>
                    </Swiper>
      </section>

      <section className='sect-2 w-80 pb-5 pt-10'>
      <h1 className='capitalize text-featured'>Section</h1>
        <MasonryLayout />
      </section>
    </section>
  )
}

export default Home