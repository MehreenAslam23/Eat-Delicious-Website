import React, { useState } from "react"
import { Link } from 'react-router-dom'
import '../Components/Navbar.css'
import image1 from '../Images/image1.jpg'
function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    }
    return (
        <div className="nav-div">
            <ul>
                <li><Link to={'/about'}>ABOUT</Link></li>
                <li><Link to={'/recipes'}>RECIPES</Link></li>
                <img src={image1}></img>
                <li><Link to={'/products'}>PRODUCTS</Link></li>
                <li>
                    <button className="btn1"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                    >
                        <span>
                            {isHovered ? (
                                <marquee behavior="scroll" direction="left" scrollamount="9">
                                    <Link to={'/contactus'}>Contact Us</Link>
                                </marquee>
                            ) : (
                                <Link to={'/contactus'}>Contact Us</Link>
                            )}
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default Navbar