import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';
 
class BlogOne extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="page-title-area item-bg2">
                    <div className="container">
                        <h1>Events</h1>
                        <span>!!This Year We Have Got 17 Great Events Planned For you</span>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Events</li>
                        </ul>
                    </div>
                </div> 

                <section className="blog-area ptb-120 bg-image">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6" >
                                <div className="single-blog-post" >
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog1.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">Town Planning</Link></h3>
                                        <p>Participants will design a futuristic technologically advanced, 
                                            sustainable, and habitable model of a township or part of it, infusing their 
                                            creativity and innovation. TOWN PLANNING event provides you the platform where 
                                            you can express your planning and designing of our future cities or towns using
                                             the modern tools, software to make the best in terms of living standards.</p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog2.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">SUITS (MOOT Court)</Link></h3>
                                        <p>Based on the concept of mock trials where two parties
                                             argue on specific claims, with a little twist, SUITS 
                                             in our symposium will have three parties, namely, Owner, 
                                             Contractor, and Engineer. The topics or scenarios will be
                                              based on civil engineering backgrounds. </p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog3.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">Paper Presentation</Link></h3>
                                        <p>Paper Presentation event presents a national-level platform to participants for 
                                            presenting their research in various domains of civil engineering. Its motive
                                             is to encourage students to dive deep into topics related to the civil domain.
                                              The participants are expected to present their ideas with the help of some 
                                              experimental & analytical research work.</p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog4.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">WALL MASTER</Link></h3>
                                        <p>The team will be given a wooden box with a closed bottom and three sides. 
                                            As reinforcement, short strips of lid-sized chart paper should be utilised.
                                             The front lid should be removed once the box has been filled with sand, 
                                             and a timer of 10 to 15 seconds should be supplied to measure the deflection. 
                                             If no deflection is discovered, the structure's load-bearing capacity will
                                              be assessed.</p>
                                        <Link to="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog5.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">TRAMS-PORT (Nebhraj)</Link></h3>
                                        <p>In a world full of technological advances and innovation, everything around 
                                            us is getting smarter everyday. Which is why, introduction to a smart 
                                            transportation system is the need of the hour. Trams-port is an event to
                                             showcase your creative and logical skills that could help in changing the
                                              problems faced in real-life scenarios and bring out sustainable solutions.</p>
                                        <Link to="#" className="read-more-btn">Read More <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog6.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">Make it a case (Nebhraj)</Link></h3>
                                        <p>As an engineer it is our duty to come up with innovative solutions 
                                            to real life technical problems and encourage future generations to 
                                            do the same. ‘Make it a Case’ is one such event that aims to understand
                                             the ideathon in solving real life scenarios and develop innovative 
                                             approaches to address the problem using the participant’s analytic skills. 
</p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog6.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">Techno Quiz</Link></h3>
                                        <p>Techno Quiz is an event that consists of logical and aptitude
                                             questions in the domain of civil engineering and allows participants 
                                             to learn, explore and showcase their skills and competence in civil engineering.

</p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog6.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">E-Tendering</Link></h3>
                                        <p>E-Tendering is a process of carrying out an entire Tendering 
                                            Cycle Online including submission of Price Bid such that Efficiency, 
                                            Economy, Speed of Internet can be harnessed. E tendering helps to
                                             outweigh the old paper method. This event provides all the civil 
                                             enthusiasts a platform to present their contracting skills.</p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog6.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">Conc Cast </Link></h3>
                                        <p>Teams will be given instructions to cast concrete cubes of 
                                            the specified cement grade (M25). On the day of the event, 
                                            the compressive strength of the cubes will be measured.
                                             The judges will award points to teams based on their mix design calculations.</p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog6.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">CV- CRUITS</Link></h3>
                                        <p>CV-Cruits keeps a check on an individual's skills, knowledge and personality. 
                                            The objective of the event is to give participants experience/overlook 
                                            the Recruitments, which will benefit them to learn, adapt and reshape 
                                            their personality and skills.</p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog6.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">Pitch Hunt</Link></h3>
                                        <p>PITCH HUNT is a platform where participants can put their entrepreneurial 
                                            skills to test. The basic motive is to create a product that can benefit 
                                            society and create value. This event aims to prepare participants for 
                                            future endeavours. This year we are going to welcome the diploma final 
                                            year students and final year B.tech/B.E students to present their project.</p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog6.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">Calculergy </Link></h3>
                                        <p>Calculergy is a two-round event to test your analytical skills and come 
                                            up with the most energy-efficient solution in the first round, and test 
                                            your demonstration and delivery skills through speech/presentations in 
                                            the second round. This event mainly focuses on introduction or use of 
                                            techniques which could save energy and cost in a real-life case scenario. 
.</p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog6.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">Softcon </Link></h3>
                                        <p>This event tests the participant's ability to compete on various 
                                            software including AutoCAD, Revit, MS project. 
                                            Nowadays almost all design consultancies and construction 
                                            firms use the software in their daily practices. Hence, we 
                                            at Nirmitee encourage the students by introducing this event -"SOFTCON".</p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="#"><img src={require("../../assets/images/blog6.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                            <Link to="#">Event</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content" style={{
                                        textAlign: "left",
                                    }}>
                                        <span className="date">06 Apr, 2022</span>
                                        <h3><Link to="#">MINDBEND </Link></h3>
                                        <p>Channel your technical scooby doo and be part of Mindbend, an event that 
                                            tests your knowledge of numerous civil engineering domains via a 
                                            ‘technical treasure hunt’. The event will consist of 5 rounds, clues 
                                            starting off with a difficulty level transitioning from easy to difficult.</p>
                                        <Link to="#" className="read-more-btn">Register <i className="icofont-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-lg-12 col-md-12">
                                <div className="pagination-area">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    <i className="icofont-double-left"></i>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link active" to="#">1</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">2</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">3</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    <i className="icofont-double-right"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default BlogOne;