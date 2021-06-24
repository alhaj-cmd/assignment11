import React from 'react';
import './Slider.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt, faHome, faRainbow} from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-3 pl-5 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faRainbow} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addproduct" className="text-white">
                        <FontAwesomeIcon icon={faRainbow} /> <span>Addproduct</span>
                    </Link>
                </li>
                </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
        </div>
    );
};

export default Slider;