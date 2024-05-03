import React from 'react'
import './Contact.css'
import HeadingText from '../../Components/HeadingText/HeadingText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
  return (
    <>
    <section>
      <HeadingText title={'Contact'} titlePrimary={'Me'} />
      <div className='container contact-container'>
        <form action='#'>
          <input type='text' required placeholder='Your Name'/>
          <input type='email' required placeholder='Your Email'/>
          <input type='number' required placeholder='Your Number'/>
          <textarea name='message' id='message' rows="6" placeholder='Your Message'></textarea>
          <button type='submit' className='btn'>
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
