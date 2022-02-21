import React from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';
 
class Pricing extends React.Component {

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
 
export default Pricing;