import React from 'react';
import { Link } from 'react-router-dom';
 
class WhyUs extends React.Component {
    render(){
        return (
            <section className="why-choose-us-two">
                <div className="row m-0 h-100 align-items-center">
                    <div className="col-lg-4 col-md-6 p-0">
                        <div className="why-choose-img">
                            <img src={require("../../assets/images/why-choose-img1.jpg")} alt="Why Us" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-0">
                        <div className="why-choose-content">
                         
                            <p>.Reimagining Civil Engineering through the eyes of Nirmitee<br/>
.A podium igniting intellectual thoughts</p>
                           

                            <span>01</span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-0">
                        <div className="why-choose-img">
                            <img src={require("../../assets/images/why-choose-img2.jpg")} alt="Why Us" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-0">
                        <div className="why-choose-content">
                            
                            <p>.Not just an event, but an expression of euphoria<br/>
.Create, Enhance and Sustain</p>
                           
                            <span>02</span>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-0">
                        <div className="why-choose-img">
                            <img src={require("../../assets/images/why-choose-img3.jpg")} alt="Why Us" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 p-0">
                        <div className="why-choose-content">
                            <p>.An Exquisite Odyssey<br/>
As we walk through all the ups and downs that life has to offer, we tend to seek solace in the springs.
 For, with springs comes NIRMITEE
</p>
                           
                            <span>03</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default WhyUs;