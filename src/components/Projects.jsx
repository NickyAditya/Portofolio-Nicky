import { useState, useEffect, useRef } from 'react'
import './Projects.css'
import tcg2Image from '../assets/tcg2.png'
import cvisionImage from '../assets/cvision.png'
import kemjarImage from '../assets/kemjar.png'
import robotImage from '../assets/robot12.png'
import jagaLansiaImage from '../assets/jagaLansia.jpg'
import { FaArrowRight } from 'react-icons/fa'

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [openMenuId, setOpenMenuId] = useState(null)
  const menuRef = useRef(null)

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  // Tutup dropdown menu kalau klik di luar area menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuId(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: 'TCG Card Collector',
      description:
        'A website for collecting and trading TCG cards with a sleek design and user-friendly interface',
      tags: ['React', 'Node.js', 'MySQL'],
      color: 'project-1',
      image: tcg2Image,
      link: 'https://tcg-master-card.vercel.app/'
    },
    {
      id: 2,
      title: 'CVision Career Classifier',
      description:
        'CVision is a service that analyzes applicants’ resumes (CV), predicts the most relevant industry categories, and provides professional feedback just like an HR professional would.',
      tags: ['React', 'ExpressJS', 'Python'],
      color: 'project-2',
      image: cvisionImage,
      link: 'https://github.com/19blueThings/CVision-Career-Classifier'
    },
    {
      id: 3,
      title: 'Cyber Security System',
      description:
        'An attack and defense simulation between the blue team and the red team, conducted in accordance with the authorization granted for network security implementation.',
      tags: ['Kali Linux', 'SQLMap', 'FFuF'],
      color: 'project-3',
      image: kemjarImage,
      pdf: '/pdf/Laporan_SkriptKiddie_Kemjar.pdf'
    },
    {
      id: 4,
      title: 'KRTMI Robotics',
      description:
        'The Indonesian Thematic Robot Contest (KRTMI) has adopted the theme “Waste Sorting Robots,” with the goal of developing semi-autonomous robots capable of automatically sorting waste.',
      tags: ['ESP32', 'Flask', 'Robotics'],
      color: 'project-4',
      image: robotImage,
      // TODO: ganti dengan URL YouTube dan path PDF laporan yang sebenarnya
      video: 'https://youtube.com/shorts/ovivRjOeXRM',
      pdf: '/pdf/Laporan_Robotika_KRTMI.pdf'
    },
    {
      id: 5,  
      title: 'Jaga Lansia APP',
      description:
        'AppJagaLansia is a mobile app specifically designed to help families and caregivers care for and monitor the health of the elderly.',
      tags: ['Flutter', 'Dart', 'Firebase/Etter'],
      color: 'project-5',
      image: jagaLansiaImage,
      link: 'https://github.com/NickyAditya/AppJagaLansia.git'
    }
  ]

  const handleViewProjectClick = (project) => {
    if (project.id === 3) {
      setSelectedProject(project)
    } else if (project.id === 4) {
      setOpenMenuId(openMenuId === project.id ? null : project.id)
    }
  }

  const handleWatchVideo = (project) => {
    setOpenMenuId(null)
    window.open(project.video, '_blank', 'noopener,noreferrer')
  }

  const handleViewReport = (project) => {
    setOpenMenuId(null)
    setSelectedProject(project)
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="header-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.color}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.id === 3 || project.id === 4 ? (
                  <div className="project-link-wrapper" ref={project.id === 4 ? menuRef : null}>
                    <button
                      className="project-link"
                      onClick={() => handleViewProjectClick(project)}
                    >
                      View Project <FaArrowRight />
                    </button>

                    {project.id === 4 && openMenuId === 4 && (
                      <div className="project-dropdown">
                        <button
                          className="dropdown-item"
                          onClick={() => handleWatchVideo(project)}
                        >
                          Watch Video
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={() => handleViewReport(project)}
                        >
                          View Report
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project <FaArrowRight />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="pdf-modal"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="pdf-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pdf-header">
              <h2>{selectedProject.title}</h2>
            </div>

            <iframe
              src={selectedProject.pdf}
              title={selectedProject.title}
              className="pdf-frame"
            />

            <div className="pdf-buttons">
              <a
                href={selectedProject.pdf}
                download
                className="download-btn"
              >
                Download Report
              </a>

              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}