import React from 'react';
import { Link } from 'react-router-dom';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-footer-widget" style={{
                            textAlign: "center",
                            marginLeft: "200px",
                        }}>
                                <h3>Venue Location</h3>
                                <span>
                                    <i className="icofont-calendar"></i> 06-08 April, 2022
                                </span>

                                <p className="location">
                                    <i className="icofont-google-map"></i> MIT World Peace University, Pune,Maharashtra
                                </p>

                                <Link to="/contact" className="contact-authority">
                                    <i className="icofont-phone"></i> Contact Our Authority
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6" >
                            <div className="single-footer-widget"style={{
                            textAlign: "left",
                        }}>
                                <h3>Social Connection</h3>
                                <p>Don't miss Link thing! Receive daily news You should connect social area 
                                    for Any Proper Updates Anytime.Lorem Ipsum is simply dummy text of the printing
                                     and typesetting industry.</p>
                                
                                <ul className="social-links">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="facebook" target="_blank">
                                            <i className="icofont-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/" className="twitter" target="_blank">
                                            <i className="icofont-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="linkedin" target="_blank">
                                            <i className="icofont-linkedin"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="instagram" target="_blank">
                                            <i className="icofont-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="copyright-area">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={require("../../assets/images/logo.png")} alt="logo" />
                                    </Link>
                                </div>
                                <ul>
                                    <li><Link to="/blog-1">Events</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="#">Register</Link></li>
                                    <li><Link to="#">About us</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                </ul>
                                <p>
                                    Copyright <i className="icofont-copyright"></i> 2022 Nirmitee. All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;