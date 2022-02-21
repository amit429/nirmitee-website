import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
import LaxButton from '../Shared/LaxButton';
 
class About extends React.Component {
    
    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
    }

    render(){
        return (
            <section className="about-area ptb-120 bg-image" >
                <div className="container" >
                    <div className="row h-100 align-items-center" style={{
                marginTop: "80px",
                marginBottom: "80px",
            }}>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Join The Event</span>
                                <h2>At Nirmitee We Create and <b>Turn It</b> Into Reality</h2>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                

                                <Link to="/about-3" className="btn btn-primary">
                                    Read More 
                                    <i className="icofont-double-right"></i>
                                </Link>

                                
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../assets/images/about1.jpg")} className="about-img1" alt="about" />

                                <img src={require("../../assets/images/about2.jpg")} className="about-img2" alt="about" />

                                <img src={require("../../assets/images/shapes/5.png")} className="shape-img" alt="about" />

                                <LaxButton buttonText="Explore More About" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;