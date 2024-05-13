import React from 'react'
import './Testimonials.css'
import HeadingText from '../HeadingText/HeadingText'
import Cards from '../../UI/Cards'
import { testimonials } from '../../data/Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonials = () => {
  return (
    <section>
        <HeadingText title={'Clients'} titlePrimary={'Testimonials'} />

        <div className='container testimonials-container'>
            <Swiper 
            className='testimonials-wrapper'
            slidesPerView={1}
            spaceBetween={10}
            > {
                testimonials.map(({id, img, name, des})=>{
                    return(
                        <SwiperSlide key={id}>
                        <Cards classname={'testimonials'}>
                        <img src={img} alt=""/>
                        <h5>{name}</h5>
                        <p>{des}</p>
                        </Cards>
                        </SwiperSlide>
                    )
                })
            }

            </Swiper>

        </div>

    </section>
  )
}

export default Testimonials
