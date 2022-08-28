import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_5xiocum', 'template_lhpzudv', form.current, 'HUgVHHUAN5bWJ2zej')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
      const notification = document.querySelector('.sent-notification').classList;
      notification.add('show-sent-notification');  
      setTimeout(() => {
        notification.remove('show-sent-notification')
      }, 2000);
    };


  return (
	<div className='contact' id='contact'>
    <div className="contact-center container reveal">
      <section className="section-title">
          <h1>Parlons de vos projets!</h1>
        </section>
      <div className="form-container">
      <form className='form' ref={form} onSubmit={sendEmail}>
      <p className="sent-notification">
        Votre email a ete bien envoyer
      </p>
          <h2>Contactez-nous</h2>
          <input type="text" id='name' name='name' placeholder='Nom'  required/>
          {/* <input type="text" id='subject' name='subject' placeholder='Sujet'  required/> */}
          <select type="text" id='subject' name='subject' required>
            <option >Selectioner votre service</option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
            <option value="Service 4">Service 4</option>
          </select>
          <input type="email" id='email' name='email' placeholder='Email'  required/>
          <textarea id='message' rows='8' name='message' placeholder='A votre ecoute'  required></textarea>
            <button className="submit-btn" type='submit'>Envoyer</button>
      </form>
      </div>
    </div>
  </div>
  )
}

export default Contact