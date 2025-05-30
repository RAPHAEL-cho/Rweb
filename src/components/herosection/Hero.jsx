import React,{useEffect, useeffect} from 'react'
import BANNER from '../../assets/images/purepng1.png'
import './Hero.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:true,
            easing:'ease-in-out'
        })
    })



        
    

    
  return (
    <div className='hero'>
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <h1 data-aos='fade-right'>We value our customer</h1>
                    <p data-aos='fade' data-aos-delay='300'>Welcome to our amazing shop, where virtually everything is sold</p>
                    <button className='btn btn-outline-primary btn-lg' data-aos='fade-up' data-aos-delay>Create an account</button>
                </div>

                <div className="col-md-5" data-aos='fade-left' data-aos-delay='400'>
                    <img src={BANNER} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero