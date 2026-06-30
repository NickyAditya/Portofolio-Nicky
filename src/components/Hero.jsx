import { useTypewriter } from '../hooks/useTypewriter'
import tcg1Image from '../assets/tcg1.png'
import robotImage from '../assets/robot.png'
import kaliImage from '../assets/kali.png'

import './Hero.css'

export const Hero = () => {
  const typewriterText = useTypewriter(
    ['Nicky Aditya Bagus', 'FullStack Web Dev', 'Tech Enthusiast'],
    80,
    2000
  )

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {typewriterText}
            <span className="cursor">|</span>
          </h1>
          <p className="hero-subtitle">Website, Apps, Cybersecurity, IoT and More!</p>
          <p className="hero-description">
            Crafting digital experiences with modern design and protection.
            Let's build something extraordinary together.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </button>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="decoration-box box-2" style={{backgroundImage: `url(${robotImage})`}}></div>
          <div className="decoration-box box-3" style={{backgroundImage: `url(${kaliImage})`}}></div>
          <div className="decoration-box box-1" style={{backgroundImage: `url(${tcg1Image})`}}></div>
        </div>
      </div>
    </section>
  )
}
