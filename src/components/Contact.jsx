import { useState, useEffect } from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

// Initialize EmailJS
emailjs.init('ZboE2xt0g0r6F2uzy')

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Email parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'nicky.aditya@mhs.itenas.ac.id'
    }

    // Send email using EmailJS
    emailjs.send('service_gsxd0yg', 'template_kht5ala', templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response)
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch((error) => {
        console.error('Failed to send email:', error)
        alert('Failed to send message. Please try again.')
      })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="header-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-box">
              <h3>Email</h3>
              <p><a href="mailto:nicky.aditya@mhs.itenas.ac.id">nicky.aditya@mhs.itenas.ac.id</a></p>
            </div>
            <div className="info-box">
              <h3>Address</h3>
              <p><a>Bandung, West Java, Indonesia</a></p>
            </div>
            <div className="info-box">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://www.instagram.com/nkydtya21_/" className="social-link" title="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/nicky-aditya-bagus-a02236381/" className="social-link" title="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/NickyAditya" className="social-link" title="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
