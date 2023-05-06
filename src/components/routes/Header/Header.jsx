import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/Logo.png";
import varukorg from "../../../assets/varukorg.png";
import login from "../../../assets/login.png";
import { Fade, Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
// import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
// import {  faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    const [isOpen, setOpen] = useState(true);
    console.log(isOpen);
    return (
        <>
            <div className="nav-wrapper-mobile">
                <div className="logo-div">
                    <img className="logo-img logo" src={logo} alt="" />
                    <h4>ShoBii</h4>
                </div>

                <div className={isOpen ? "val" : "val-off"}>
                    <nav className="nav-mobile">
                        <NavLink to={"lek & spel"}> Lek & Spel </NavLink>
                        <NavLink to={"barn"}> Barn </NavLink>
                        <NavLink to={"Utvalt"}> Utvalt </NavLink>
                    </nav>
                    {/* <FontAwesomeIcon  className="searchbar" icon={faMagnifyingGlass} /> */}
                    <input
                        type="text"
                        className="input-mobile"
                        placeholder="Sök en produkt"
                    />
                    <hr />
                    <img className="login" src={login} alt="" />
                </div>

                <div className="right">
                    <img className="varukorg-img" src={varukorg} alt="" />
                    <div className="hamburger">
                        <Fade
                            color="white"
                            toggled={isOpen}
                            toggle={setOpen}
                            size={30}
                        />
                    </div>
                </div>
            </div>

            <div className="nav-wrapper-desktop">
                <div className="logo-div-desktop">
                    <img
                        className="logo-img-desktop logo-desktop"
                        src={logo}
                        alt=""
                    />
                    <h4>ShoBii</h4>
                </div>

                <div className="nav-div-desktop">
                    <nav className="nav-desktop">
                        <NavLink to={"lek & spel"}> Lek & Spel </NavLink>
                        <NavLink to={"barn"}> Barn </NavLink>
                        <NavLink to={"Utvalt"}> Utvalt </NavLink>
                    </nav>

                    <input
                        type="text"
                        className="input-desktop"
                        placeholder="Sök en produkt"
                    />
                </div>

                <div className="right-desktop">
                    <img
                        className="varukorg-img-desktop"
                        src={varukorg}
                        alt=""
                    />
                    <img className="login-desktop" src={login} alt="" />
                </div>
            </div>
        </>
    );
};

export default Header;
