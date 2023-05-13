import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Logo.png";
import login from "../../assets/login.png";
import { Fade, Fade as Hamburger } from "hamburger-react";
import { useState,} from "react";
import Login from "../login/Login";
import { useRecoilState } from "recoil";
import { clicked, searchState,isSearched, cartState, } from "../utils/getAtom";
import { faL } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from "../products/ShoppingCart";
import {GiShoppingBag} from "react-icons/gi"
// import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
// import {  faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [isClicked, setClicked] = useRecoilState(clicked);
    const [search, setSearchState] = useRecoilState(searchState);
    const [isSearch, setisSearch] = useRecoilState(isSearched)
    const [cart, setcartState] = useState(false)
    const [productsInCart] = useRecoilState(cartState)
    // console.log(isOpen);

    const setSearch = (e) =>{
        const inputValue = e.target.value.toLowerCase()
        setSearchState(inputValue)
        setisSearch(inputValue || false)
        console.log(search);
    }

    const handleclick = () => {
        setClicked(true);
    }
    const handelCartState = () =>{
        setcartState(cart === false ? true : false)
        console.log(cart);
    }
 
    return (
        <>
            <div className="nav-wrapper-mobile">
                <div className="logo-div">
                   <NavLink to={"/"}>
                   <img  className="logo-img logo" src={logo} alt="" />
                    </NavLink> 
                    <h4>ShoBii</h4>
                </div>

                <div className={isOpen ? "val" : "val-off"}>
                    <nav className="nav-mobile">
                        <NavLink to={"/products"}> Lek & Spel </NavLink>
                        <NavLink to={"/about"}> Om Oss </NavLink>
                    </nav>
                    {/* <FontAwesomeIcon  className="searchbar" icon={faMagnifyingGlass} /> */}
                    <input
                        onChange={setSearch}
                        type="text"
                        className="input-mobile"
                        placeholder="Sök en produkt"
                    />
                    <hr />
                </div>

                <div className="right">
                <button className="bag-btn">
                    <GiShoppingBag color="white" size={35}/>
                    </button>

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
                <NavLink to={"/"}>
                   <img  className="logo-img logo" src={logo} alt="" />
                    </NavLink> 
                    <h4>ShoBii</h4>
                </div>

                <div className="nav-div-desktop">
                    <nav className="nav-desktop">
                        <NavLink to={"products"}> Lek & Spel </NavLink>
                        <NavLink to={"/"}> Sommar Erbjudande
                    </NavLink> 
                        <NavLink to={"/about"}> Om Oss </NavLink>
                    </nav>

                    <input
                        onChange={setSearch}
                        type="text"
                        className="input-desktop"
                        placeholder="Sök en produkt"
                    />
                </div>

                <div className="right-desktop">
                    <button onClick={handelCartState} className="bag-btn">
                    <GiShoppingBag color="white" size={35}/>
                    </button>

                    <button onClick={handleclick} className="login-btn"> <img className="login-desktop" src={login} alt="" /> </button>
                </div>
            </div>
            {isClicked? 
            <Login/>:
            null}
            {cart ? <ShoppingCart
            products={productsInCart}
            /> : null}
        </>
    );
};

export default Header;
