import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import profilePhoto from '../assets/profile1.jpeg'

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="header-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science student at Institut Teknologi Nasional Bandung, currently in my 7th semester, 
              focused on building modern and scalable web applications as a fullstack developer.
            </p>
            <p>
              I work across the stack with React.js, Express.js, and native PHP, and I'm continuously expanding 
              my skills into network security, IoT, and game development with Unity. I'm currently undergoing 
              my Internship Program, eager to apply my technical skills to real-world challenges.
            </p>
            <div className="about-education">
              <FontAwesomeIcon icon={faGraduationCap} className="education-icon" />
              <div>
                <span className="education-degree">Informatics Engineering</span>
                <span className="education-school">Institut Teknologi Nasional Bandung</span>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-box">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">1</span>
                <span className="stat-label">BNSP Certified</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}