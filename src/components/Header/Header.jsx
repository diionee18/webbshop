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
    const [cartsVisibility, setCartVisibility] = useState(false)

    const [productsInCart, setProductInCart] = useRecoilState(cartState)

    const setSearch = (e) =>{
        const inputValue = e.target.value.toLowerCase()
        setSearchState(inputValue)
        setisSearch(inputValue || false)
    }

    const handleclick = () => {
        setClicked(true);
    }
    const handelCartState = () =>{

        setCartVisibility(true)
    }
    const handelClose = () =>{
        setCartVisibility(false)
    }
    const onQuantityChange = (productId, count) => {
        setProductInCart((oldState) => {
          const updatedCart = oldState.map((item) => {
            if (item.id === productId) {
              return { ...item, count: count };
            }
            return item;
          });
          return updatedCart;
        });
      };

      const onProductRemove = (product) => {
        setProductInCart((oldState) => {
          const updatedCart = oldState.filter((item) => item.id !== product.id);
          return updatedCart;
        });
      };
      
      
      
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
                <button className="bag-btn" onClick={handelCartState} >
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
            <ShoppingCart
            products={productsInCart}
            visibility={cartsVisibility}
            onClose={handelClose}
            onQuantityChange={onQuantityChange}
            onProductRemove={onProductRemove}
            />
        </>
    );
};

export default Header;
