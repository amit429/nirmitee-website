import React from 'react';
import lax from 'lax.js';
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
            <section className="about-area-two ptb-120 bg-image">
                <div className="container">
                    <div className="row h-100  align-items-center" style={{
                        columnGap: "100px"
                    }}>
                    <div className="col-lg-5">
                            <div className="about-image">
                                <img src={require("../../assets/images/about3.jpg")} className="about-img1" alt="about" />

                                {/* <LaxButton /> */}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span align={"left"}>Join The Event</span>

                                <p align={"left"} padding={"20px"}>Nirmitee aims to provide a strong sharing platform and bridge the gap 
                                    between the corporate world and the education system. It gives the remarkable 
                                    opportunity to alumni, corporate people, entrepreneurs, and college students 
                                    to get involved in the development of Sustainability, smart construction and to 
                                    foster new construction techniques in india.2021 marked the 21st edition of this
                                     grandeur symposium and the first year of organising the fest online, which came 
                                     with its own challenges, but the collective efforts and enthusiasm of the participants, 
                                     organising committee, student volunteers, and faculty members are what made NIRMITEE 
                                     ‘21 a tremendous success. The event throughout the years has reached an extensive 
                                     population of over 4000 diploma, undergraduate, postgraduate, and research scholars
                                      from distinct institutions from about 150 colleges. We are sure that this year
                                       Nirmitee will reach new heights of competition, excitement, and energy.
</p>
                                
                                <p align={"left"}>Nirmitee is an expression of our dedication, hard work, passion, and
                                     wholehearted efforts to bring you a wonderful event that everyone has been eyeing</p>

                                {/* <div className="signature">
                                    <img src={require("../../assets/images/signature.png")} alt="about" />
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;