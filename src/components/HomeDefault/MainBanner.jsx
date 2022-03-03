import React from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
 
class MainBanner extends React.Component {

    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    }

    makeTimer = () => {
        let endTime = new Date("April 7, 2022 9:00:00 PDT");			
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400))/3600 );
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        this.setState({
            days, hours, minutes, seconds
        });
    }

    componentDidMount(){
        this.myInterval = setInterval(() => { 
            this.makeTimer();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render(){
        return (
            <React.Fragment>
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='rB7aJSJVAIo' 
                    onClose={() => this.setState({isOpen: false})} 
                />
                
                <div className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content" style={{
                                    textAlign: "right",
                                }}>
                                    <p>?Are you <span>ready</span> to attend</p>
                                    <h1>National Level <span>Event</span> <br />Nirmitee <b>2</b><b>0</b><b>2</b><b>2</b></h1>

                                    <ul>
                                        <li><i className="icofont-compass"></i> MIT WPU, CAMPUS</li>
                                        <li><i className="icofont-calendar"></i> 06-08 APRIL, 2022</li>
                                    </ul>

                                    <div className="button-box">
                                        <Link to="/blog-1" className="btn btn-primary">!Register Now</Link>
                                        <Link 
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            to="#" 
                                            className="video-btn popup-youtube"
                                        >
                                            <i className="icofont-ui-play"></i> Watch Pormo Video
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="event-countdown countdown1">
                        <div id="timer">
                            <div id="days">{this.state.days} <span>Days</span></div>
                            <div id="hours">{this.state.hours} <span>Hours</span></div>
                            <div id="minutes">{this.state.minutes} <span>Minutes</span></div>
                            <div id="seconds">{this.state.seconds} <span>Seconds</span></div>
                        </div>
                    </div>

                    <div className="shape1">
                        <img src={require("../../assets/images/shapes/1.png")} alt="shape1" />
                    </div>

                    <div className="shape2 rotateme">
                        <img src={require("../../assets/images/shapes/2.png")} alt="shape2" />
                    </div>

                    <div className="shape3 rotateme">
                        <img src={require("../../assets/images/shapes/3.png")} alt="shape3" />
                    </div>

                    <div className="shape4">
                        <img src={require("../../assets/images/shapes/4.png")} alt="shape4" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MainBanner;