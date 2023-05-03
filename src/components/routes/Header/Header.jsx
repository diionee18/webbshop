import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";
import varukorg from "./varukorg.png";
import { Fade, Fade as Hamburger } from 'hamburger-react'
const Header = () => {
    return (
        <div className="nav-wrapper">

            <div className="logo-div">
                <img className="logo-img logo" src={logo} alt="" />
                <h4>ShoBii</h4>
            </div>

            <div className="val">
                <nav>
                    <NavLink to={"lek & spel"}> Lek & Spel </NavLink>
                    <NavLink to={"barn"}> Barn </NavLink>
                    <NavLink to={"Utvalt"}> Utvalt </NavLink>
                </nav>
            </div>

            <div className="right">
                <img className="varukorg-img" src={varukorg} alt="" />
                <Fade color="white" size={30}/>

                
            </div>
        </div>
    );
};

export default Header;
