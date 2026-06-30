import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faLightbulb, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Navigation.css'

export const Navigation = () => {
  const { isDark, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">NICKY</span>
        </div>

        <button 
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-menu">
            <button
              className="nav-link"
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection('certificates')}
            >
              Certificates
            </button>
          </div>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <FontAwesomeIcon icon={isDark ? faLightbulb : faMoon} />
          </button>
        </div>
      </div>
    </nav>
  )
}
