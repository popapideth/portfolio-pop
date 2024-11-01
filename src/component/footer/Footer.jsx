import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Pop</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Project</a>
                </li>

                <li>
                    <a href="#" className="footer_link"></a>
                </li>
            </ul>
            <div className="footer_social">
                <a href="https://www.instagram.com/pop_apd" className="footer_social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100014814422380" className="footer_social-link" target="_blank">
                    <i class="bx bxl-facebook"></i>
                </a>
                <a href="https://x.com/pop_apd" className="footer_social-link" target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>
            <span className='footer_copy'>&#169;2024. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer