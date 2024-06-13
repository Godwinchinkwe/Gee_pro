import React, { useRef, useState} from 'react';
import './Contact.css'
import HeadingText from '../../Components/HeadingText/HeadingText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2'




const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const [ done, setDone] = useState(false)
  const [ notSent, setNotSent] = useState(false)

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
          setDone(true);
        },
       
        (error) => {
          console.log('FAILED...', error.text);
          setNotSent(true);
        },
      );

      setName('');
      setEmail('');
      setNumber('');
      setMessage('');
  };

  return (

    <>
    <section>
      <HeadingText title={'Contact'} titlePrimary={'Me'}  />
      <HeadingText titlePrimary={done && "Thank you very much for Contacting Us"} />
      <HeadingText titlePrimary={notSent && "Message Not Sent! check your network connection"} />

      <div className='container contact-container'>
        <form id="myForm" ref={form} onSubmit={sendEmail} >
          <input type="text" name="to_name" value={name} required placeholder='Your Name'
          onChange={(e) => setName(e.target.value)} />

          <input type='email' name="user_email" value={email} required placeholder='Your Email'
          onChange={(e) => setEmail(e.target.value)}/>

          <input type='number' name="number" value={number} required placeholder='Your Number'
          onChange={(e) => setNumber(e.target.value)}/>

          <textarea name='message' id='message' value={message} rows="6" placeholder='Your Message'
          onChange={(e) => setMessage(e.target.value)}></textarea>
          
          <button type='submit' value="Send" className='btn'>
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
