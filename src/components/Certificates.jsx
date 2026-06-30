import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Certificates.css'

export const Certificates = () => {
  // Ganti src dan data di bawah ini sesuai sertifikat kamu
  const certificates = [
    {
      id: 1,
      title: 'Junior Web Developer',
      issuer: 'DigiUp',
      date: '2023',
      image: '/certificates/sertif_bnsp.jpg'
    },
    {
      id: 2,
      title: 'Course - Belajar Fundamental Aplikasi Web dengan React',
      issuer: 'Dicoding',
      date: '2026',
      image: '/certificates/sertif_cdc_1.jpg'
    },
    {
      id: 3,
      title: 'Course - Belajar Membuat Front-End Web untuk Pemula',
      issuer: 'Dicoding',
      date: '2026',
      image: '/certificates/sertif_cdc_2.jpg'
    },
    {
      id: 4,
      title: 'Course - Belajar Fundamental Back-End dengan JavaScript',
      issuer: 'Dicoding',
      date: '2026',
      image: '/certificates/sertif_cdc_3.jpg'
    },
    {
        id: 5,
        title: 'Course - Belajar Back-End Pemula dengan JavaScript',
        issuer: 'Dicoding',
        date: '2026',
        image: '/certificates/sertif_cdc_4.jpg'
    },  
    {
        id: 6,
        title: 'Course - Belajar Dasar Pemrograman JavaScript',
        issuer: 'Dicoding',
        date: '2026',
        image: '/certificates/sertif_cdc_5.jpg'
    },
    {
        id: 7,
        title: 'Course - Introduction to Financial Literacy',
        issuer: 'Dicoding',
        date: '2026',
        image: '/certificates/sertif_cdc_6.jpg'
    },
    {
        id: 8,
        title: 'Course - Belajar Dasar Pemrograman Web',
        issuer: 'Dicoding',
        date: '2026',
        image: '/certificates/sertif_cdc_7.jpg'
    },
    {
        id: 9,
        title: 'Course - Belajar Dasar Cloud dan Gen AI di AWS',
        issuer: 'Dicoding',
        date: '2026',
        image: '/certificates/sertif_cdc_8.jpg'
    },
    {
        id: 10,
        title: 'Course - Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
        issuer: 'Dicoding',
        date: '2026',
        image: '/certificates/sertif_cdc_9.jpg'
    },
    {
        id: 11,
        title: 'Course - Pengenalan ke Logika Pemrograman (Programming Logic 101)',
        issuer: 'Dicoding',
        date: '2026',
        image: '/certificates/sertif_cdc_10.jpg'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCert, setSelectedCert] = useState(null)

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="certificates" className="certificates">
      <div className="certificates-container">
        <div className="section-header">
          <h2>Certificates</h2>
          <div className="header-line"></div>
        </div>

        <div className="certificate-slider">
          <button className="slider-btn slider-btn-prev" onClick={goToPrev} aria-label="Previous certificate">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="slider-track-wrapper">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert) => (
                <div className="slide" key={cert.id}>
                  <div
                    className="certificate-card"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="certificate-image-wrap">
                      <img src={cert.image} alt={cert.title} className="certificate-image" />
                      <div className="certificate-overlay">
                        <span>Click to view</span>
                      </div>
                    </div>
                    <div className="certificate-info">
                      <h3>{cert.title}</h3>
                      <p className="certificate-issuer">{cert.issuer}</p>
                      <span className="certificate-date">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn slider-btn-next" onClick={goToNext} aria-label="Next certificate">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="slider-dots">
          {certificates.map((cert, index) => (
            <button
              key={cert.id}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal preview gambar full */}
      {selectedCert && (
        <div className="certificate-modal" onClick={() => setSelectedCert(null)}>
          <button className="modal-close" onClick={() => setSelectedCert(null)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <div className="modal-info">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.issuer} &middot; {selectedCert.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}