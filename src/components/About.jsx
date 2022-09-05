import React from 'react'
const About = () => {
  return (
	<div className='about ' id='about'>
    <div className='about-center container'>
      <section className="section-title">
        <h1>À propos</h1>
        </section>
      <section className="about-section">
        <article className='description'>
          <p>
            <span>Territoir Vert</span> réuni un ensemble d’acteurs qualifiés pour vous accompagner dans la réussite de vos projets de rénovation thermique. <br />
            <ul>
              <li>- Conseil technique</li>
              <li>- Financement et aides déduites</li>
              <li>- Réalisations de travaux</li>
            </ul>
          </p>
        </article>
        <div className="about-illustration">
          <img src="images/about-il.png" alt="green energy" />
        </div>
      </section>      
    </div>
	</div>
  )
}

export default About
