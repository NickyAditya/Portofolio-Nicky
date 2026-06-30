import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJs,
  faCss3Alt,
  faHtml5,
  faVuejs,
  faNodeJs,
  faPhp,
  faLaravel,
  faGitAlt,
  faFigma,
  faDocker,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBolt,
  faDatabase,
  faServer,
  faFire,
  faCode,
} from '@fortawesome/free-solid-svg-icons'

// Mapping nama skill -> icon & warna brand masing-masing
const skillIcons = {
  ReactJS: { icon: faReact, color: '#61DAFB' },
  JavaScript: { icon: faJs, color: '#F7DF1E' },
  CSS: { icon: faCss3Alt, color: '#264DE4' },
  Vite: { icon: faBolt, color: '#646CFF' }, // Vite tidak punya brand icon resmi di FA
  HTML: { icon: faHtml5, color: '#E34F26' },

  'Node.js': { icon: faNodeJs, color: '#339933' },
  PHP: { icon: faPhp, color: '#777BB4' },
  'Express.js': { icon: faServer, color: '#000000' }, // tidak ada brand icon
  Laravel: { icon: faLaravel, color: '#FF2D20' },
  PostgreSQL: { icon: faDatabase, color: '#336791' }, // tidak ada brand icon
  MySQL: { icon: faDatabase, color: '#4479A1' }, // tidak ada brand icon

  Git: { icon: faGitAlt, color: '#F05032' },
  Figma: { icon: faFigma, color: '#F24E1E' },
  Firebase: { icon: faFire, color: '#FFCA28' }, // tidak ada brand icon
  Docker: { icon: faDocker, color: '#2496ED' },
  'VS Code': { icon: faCode, color: '#007ACC' }, // tidak ada brand icon
}

export const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['ReactJS', 'JavaScript', 'CSS', 'Vite', 'HTML']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'PHP', 'Express.js', 'Laravel', 'PostgreSQL', 'MySQL']
    },
    {
      name: 'Tools & Others',
      skills: ['Git', 'Figma', 'Firebase', 'Docker', 'VS Code']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <div className="header-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <h3>{category.name}</h3>
              <div className="skill-items">
                {category.skills.map((skill) => {
                  const iconData = skillIcons[skill]
                  return (
                    <div key={skill} className="skill-item">
                      {iconData && (
                        <FontAwesomeIcon
                          icon={iconData.icon}
                          className="skill-icon"
                          style={{ color: iconData.color }}
                        />
                      )}
                      <span>{skill}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}