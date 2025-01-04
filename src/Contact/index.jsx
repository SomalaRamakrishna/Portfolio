import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import emailjs from '@emailjs/browser';
import { FaArrowUp, FaChevronUp, FaWhatsapp } from 'react-icons/fa';
  import { FaGithub, FaLinkedinIn, FaXTwitter, FaFacebookF, FaEnvelope,FaPhone, FaLocationDot  } from 'react-icons/fa6'; // Import icons
const Contact = () => {
    
    const [subject, setSubject] = useState('');
     const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
     console.log(e.target);
    emailjs.sendForm('service_dpxze7g', 'template_bydkrph', e.target, 'XYCr_Sk1B_spbpcAT')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!,I will respond as soon as possible");
          setEmail('');
          setMessage('');
          setSubject('')
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again later.");
      });
  };

  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 20px from the top.
  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate of the document.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Enable smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);


    
  return (
    <div className="developer-contact" id="contact">
    <div className="contact-container">
            <div className="contact-heading">CONTACT WITH ME</div>
            <div className="contact-content">
                <div className="contact-left">
                    <p>
                        If you have any questions or concerns, please don't hesitate to
                        contact me. I am open to any work opportunities that align with my
                        skills and interests.
                    </p>
                    <form  onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name:"
                            value={subject}
                            onChange={(e)=>{setSubject(e.target.value )}}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email:"
                            value={email}
                           onChange={(e)=>{setEmail(e.target.value )}}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message:"
                            value={message}
                           onChange={(e)=>{setMessage(e.target.value )}}
                        />
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
                <div className="contact-right">
                    <div className="contact-info">
                       <div className="info-item">
                            <FaEnvelope /> 
                            <span>somalaramakrishna1003d@gmail.com</span>
                        </div>
                        <div className="info-item">
                              <FaPhone /> 
                            <span>+91 9177975108</span>
                        </div>
                        <div className="info-item">
                             <FaLocationDot /> 
                            <span>Kurnool - Andhra Pradesh,India</span>
                        </div>
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/SomalaRamakrishna" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/somala-ramakrishna?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpLmGiLAbSku1qaYQVMEbpQ%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.facebook.com/ramakrishna.somala" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                         <a href="https://wa.me/+919177975108" target="_blank" rel="noopener noreferrer">
                              <FaWhatsapp />
                          </a>
                    </div>
                </div>
            </div>
        </div>
          <button className={`back-to-top ${isVisible ? 'active' :''}`}><FaArrowUp  onClick={scrollToTop}/> </button> 
      </div>
  )
}

export default Contact
