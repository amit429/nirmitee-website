import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';

const options = {
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
    responsive:{
        0: {
            items:1,
        },
        768: {
            items:2,
        },
        1200: {
            items:3,
        }
    }
}
 
class LatestNews extends React.Component {
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
            <></>
        );
    }
}
 
export default LatestNews;