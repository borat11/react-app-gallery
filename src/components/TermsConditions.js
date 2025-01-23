import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ipsum perspiciatis! Blanditiis animi veritatis, debitis modi ipsam eligendi eos, rerum laudantium distinctio facilis voluptas explicabo quae cum quibusdam autem incidunt?</p>
            <p>Go back to <Link to="/signin">Register</Link></p>
        </div>
    );
};

export default Terms;