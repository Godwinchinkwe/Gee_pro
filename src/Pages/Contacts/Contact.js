import React, { useRef } from 'react';
import './Contact.css'
import HeadingText from '../../Components/HeadingText/HeadingText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';




const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_37vibr2', 'template_9pbffde', form.current, {
        publicKey: 'qAnAsVahlFfnpPoMR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // setDone(true);
        },
       
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (

    <>
    <section>
      <HeadingText title={'Contact'} titlePrimary={'Me'} />
      <div className='container contact-container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="to_name" required placeholder='Your Name'/>
          <input type='email' name="user_email"  required placeholder='Your Email'/>
          <input type='number' name="number" required placeholder='Your Number'/>
          <textarea name='message' id='message' rows="6" placeholder='Your Message'></textarea>
          <button type='submit'  value="Send" className='btn'>
            send 
            <span><FontAwesomeIcon icon={faPaperPlane} /></span>
          </button>
        </form>
      </div>
    </section>

    <footer>
      copyright All Right Reserved || Devodinakachi@gmail.com
    </footer>
    </>
  )
}

export default Contact
