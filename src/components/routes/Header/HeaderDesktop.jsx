import { NavLink } from "react-router-dom";
import "./HeaderDesktop.css";
import logo from "../../../assets/Logo.png";
import varukorg from "../../../assets/varukorg.png";
import login from "../../../assets/login.png";
import { useState } from "react";
// import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
// import {  faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";
const HeaderDesktop = () => {

    return (
        <div className="nav-wrapper-desktop">

             <div className="logo-div-desktop">
                <img className="logo-img-desktop logo-desktop" src={logo} alt="" />
                <h4>ShoBii</h4>
            </div> 

            <div className="nav-div-desktop">
                <nav>
                    <NavLink to={"lek & spel"}> Lek & Spel </NavLink>
                    <NavLink to={"barn"}> Barn </NavLink>
                    <NavLink to={"Utvalt"}> Utvalt </NavLink>
                </nav>
                

                <input type="text" className="input-desktop" placeholder="Sök en produkt"/>
                
            </div>

             <div className="right-desktop">
                <img className="varukorg-img-desktop" src={varukorg} alt="" />
                <img className="login-desktop" src={login} alt="" />

                
            </div>
        </div>
    );
};

export default HeaderDesktop;