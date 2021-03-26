
import React, { useEffect, useRef, useState } from 'react'

import Navigation from './Navigation'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contacts from './Contacts';
import HomePage from './HomePage';
import About from './About';
import Product from './Product';


export default function Home() {
  const [scroll, setscroll] = useState(0)
  let img = 'images/slide11.png'
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setscroll(window.scrollY)

    })
  })
  useEffect(() => {
    AOS.init();
  }, [])
  const styleBox = {
    marginTop: 5,
    marginBottom: 5,
    //boxShadow: "1px 1px  5px  #ccd1d1",
    // padding: 20,
  }
  return (
    <div>
      <div style={{ marginBottom: 56 }}>
        <Navigation />
      </div>
      <div data-spy="scroll" data-target="#navbar" className="scrollspy-example z-depth-1 mt-4" data-offset="0" >
        <div className="c row">
          <img src={img} alt="Snow" style={{ width: '100%', }} />
          <div className="top-right" style={{ fontSize: '3vw', textShadow: "3px 3px  5px  #fff", WebkitTextStroke: '0.2px #FFF' }}>
            Zhongji Insurance Co.Ltd<br />
          Home Insurance <br />
          Motor Insurance<br />
          Travel Insurance<br />
          Health Insurance<br />
          Personal Accident Insurance<br />
          </div>
        </div>
        <div
          id='Home'
          data-aos="fade-up" data-aos-once="true"
          style={styleBox}
        >
          <HomePage />

        </div>
        <div
          id='Product'
          data-aos="fade-up" data-aos-once="true"
          style={styleBox}>
          <Product />
        </div>
        <div
          id='About'
          data-aos="fade-up"
          data-aos-once="true"
          style={styleBox}>
          <About />
        </div>
        <div
          id='Contacts'
          data-aos="fade-up"
          data-aos-once="true"
          style={styleBox}>
          <Contacts />
        </div>
        <div
          className='row'
          style={{
            height: '9vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'linear-gradient(to right, #003c3c , #248b6f)'
          }}>
          <p style={{ color: '#FFF', fontSize: '2.5vw' }}>ຈົງຈີ ປະກັນໄພ ເບິ່ງແຍງທ່ານ ໂດຍບໍ່ມີວັນສິ້ນສຸດ/  Zhongji Insurance Infinite Cares </p>

        </div>


        {
          scroll > 680 ?
            <a
              href='/#'
              style={{
                position: 'fixed',
                bottom: 10,
                right: 10
              }}
            ><i style={{ fontSize: 35 }} className="fas fa-arrow-circle-up"></i></a>
            :
            null
        }





      </div>
    </div>





  )
}


