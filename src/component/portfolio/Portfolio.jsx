import React, { useState } from 'react'
import './portfolio.css'
import Menu from './Menu';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'All'
    ? Menu
    : Menu.filter((Menu) => Menu.category === selectedCategory);
    
    
  return (
    <section className="portfolio section" id="portfolio">
       <h2 className="section_title">Portfolio</h2>
       <span className="section_subtitle">Most recent work</span>
       <div className="portfolio_filters">
        {['All', 'Web', 'competition', 'certificate'].map((category) => (
          <button
            key={category}
            className={`filter_button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
       </div>

       <div className="portfolio_container grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio_card">
            <img src={project.image} alt={project.title} className="portfolio_img" />
            <h3 className="portfolio_title">{project.title}</h3>
            <span className="portfolio_button">view More
            <i className="uil uil-arrow-right portfolio_button-icon"></i>
            </span>
          </div>
        ))}
       </div>
    </section>
  )
}

export default Portfolio