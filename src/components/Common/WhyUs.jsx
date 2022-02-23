import React from 'react';
import { Link } from 'react-router-dom';
 
class WhyUs extends React.Component {
    render(){
        return (
            <section className="why-choose-us">
                <div className="row m-0">
                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="icofont-headphone-alt-1"></i>
                                        </div>
                                        <h3>Our Vision</h3>
                                        <p> Reimagining Civil Engineering through the eyes of Nirmitee.</p>
            
                                        <Link to="/blog-1" className="btn btn-primary">Register Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="icofont-network-tower"></i>
                                        </div>
                                        <h3>Networking</h3>
                                        <p>Nirmitee is a stellar opportunity that brings together civil enthusiasts for showcasing their 
                                            talent and improving their abilities to the very best degree.</p>
            
                                        <Link to="/blog-1" className="btn btn-primary">Register Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="icofont-users-social"></i>
                                        </div>
                                        <h3>New People</h3>
                                        <p>Over 4000 students participate and fanatics are\
                                             fostered via adroit fellows of the civil zone and teaching faculty of 150 various 
                                             colleges from throughout India. </p>
            
                                        <Link to="/blog-1" className="btn btn-primary">Register Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="icofont-wink-smile"></i>
                                        </div>
                                        <h3>Competitions</h3>
                                        <p>Nirmitee has evolved to be a platform for global interaction over the years. The deluge of competitions that this event hosts presents
                                             both- raw, undiscovered talents and pro-shows.  </p>
            
                                        <Link to="/blog-1" className="btn btn-primary">Register Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className='slideshow'>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
            </section>
        );
    }
}
 
export default WhyUs;