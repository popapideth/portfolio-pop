import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index)=>{
        setToggleState(index);
    };
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i offer</span>

        <div className="services_container container grid">
            {/* product designer */}
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">Product <br/> Designer</h3>
                </div>

                <span onClick={() => toggleTab(1)} className="services_button" >View More
                <i className="uil uil-arrow-right services_button-icon"></i> 
                </span>

                <div className={toggleState === 1 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Product Designer</h3>
                        <p className="services_modal-description">
                        Comprehensive product design from inception to real-world use, including understanding user needs.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Product development and functional design.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Problem-solving.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Plan and design products that meet user needs.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Creating user flows, wireframes.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Creative and critical thinking.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* UI/UX designer */}
            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">UI/UX <br/> Designer</h3>
                </div>

                <span onClick={()=> toggleTab(2)} className="services_button">View More
                <i className="uil uil-arrow-right services_button-icon"></i> 
                </span>

                <div className={toggleState === 2 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">UI/UX Designer</h3>
                        <p className="services_modal-description">
                        Focus on enabling users to use the product easily and efficiently.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">I developer the user Interface.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Web page development.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">I create UX element interactions.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Deliver the best user experience with the product.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">High competency with a range of design tools.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Visual designer */}
            <div className="services_content">
                <div>
                    <i className="uil uil-edit services_icon"></i>
                    <h3 className="services_title">Visual <br/> Designer</h3>
                </div>

                <span onClick={()=> toggleTab(3)} className="services_button">View More
                <i className="uil uil-arrow-right services_button-icon"></i> 
                </span>

                <div className={toggleState === 3 ? "services_modal active_modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Visual Designer</h3>
                        <p className="services_modal-description">
                        Focus on aesthetics and creating a strong first impression for users.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Creating beautiful product aesthetics.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Graphic design.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Make the product visually appealing.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Define basic requirements for new UIs.</p>
                            </li>

                            <li className="services_modal-services">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services