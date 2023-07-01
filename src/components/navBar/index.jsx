import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
import { HiX } from "react-icons/hi";
import { navMenus } from "./config";
import "./styles.scss";
const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo" >
                        <FontAwesomeIcon icon={faFaceSmileWink} size="2x" style={{position: 'absolute', top: 18, left: 17 }} />
                    </Link>
                    <ul className={click ? "navbar__container__menu active" : "navbar__container__menu"}>
                        {
                            navMenus.map((item, key) => (
                                <li key={key} className="navbar__container__menu__item">
                                    <Link
                                        to={item.to}
                                        className="navbar__container__menu__item__links"
                                    >{item.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="nav_icon" onClick={handleClick}>
                        {
                            click ? <HiX size={30} /> : <FaBars size={30} />
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;