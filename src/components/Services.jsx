import React from 'react'
import { services } from '../data'
import { useGlobalContext } from '../Context'


const Works = () => {
  const {setService} = useGlobalContext();

  return (
	<div className='works' id='works'>
    <div className="works-center container reveal">
        <section className="section-title">
        <h1>Nos service</h1>
        </section>
        <div className="services">
          {services.map((service) => {
            const {id, title, text, button} = service
            return (
              <div className="service" key={id}>
                <h2>{title}</h2>
                <p>{text}</p>
                <a href="#contact">
                  <button className='btn' onClick={()=> setService(title)}>{button}</button>
                </a>
              </div>
            )
          })}
          
        </div>

    </div>
  </div>
  )
}

export default Works