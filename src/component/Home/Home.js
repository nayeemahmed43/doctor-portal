import React from 'react';
import './Home.css';
import MaskGroup1 from "../../images/Mask Group 1.png";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div id="navbar"></div>
            <nav class="navbar navbar-light bg-light justify-content-end">
                <span class="nav navbar-brand mb-0 h1">Home</span>
                <span class="nav navbar-brand mb-0 h1">About</span>
                <span class="nav navbar-brand mb-0 h1">Dental Services</span>
                <Link to="/review"><span class="nav navbar-brand mb-0 h1">Reviews</span></Link>
                <span class="nav navbar-brand mb-0 h1">Blog</span>
                <span class="navbar-brand mb-0 h1">Contact Us</span>
            </nav>

            <div className="row">
                <div className="content col-md-4 ">
                    <h1>Your new smile starts here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur rem nihil ex consectetur libero  hic excepturi tenetur corporis iure!
                    </p>
                    <Link to="/appointment"><button className="btn btn-primary">GET APPOINTMENT</button></Link> 
                </div>

                <div className="col-md-6 d-flex justify-content-center ">
                        <img src={MaskGroup1} alt="" />
                </div> 

            </div>       
        </div>
    );
};

export default Home;