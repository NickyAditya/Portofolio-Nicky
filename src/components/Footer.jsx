import { FaHeart } from 'react-icons/fa'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2026 Nicky. All rights reserved.</p>
          <p>Designed & Built with <FaHeart className="heartbeat" /></p>
        </div>
      </div>
    </footer>
  )
}
