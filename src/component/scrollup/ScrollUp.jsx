import React from 'react'
import './scrollup.css'

const ScrollUp = () => {

    window.addEventListener("scroll", function() {
        const scrollUp = document.querySelector(".scrollup");
        // เมื่อ scroll แกนy สูงกว่า560 viewport, จะทำซ่อนscrollเมื่อน้อยกว่าจะทำshow-scroll
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    });
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  )
}

export default ScrollUp