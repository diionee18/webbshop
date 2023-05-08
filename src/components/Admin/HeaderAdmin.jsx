import logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import "./HeaderAdmin.css"
import Users from "./Users";


const HeaderAdmin = () => {
    return (
        <>
            <div className="nav-wrapper-admin">
                <div className="logo-div-admin">
                    <img className="logo-img logo" src={logo} alt="" />
                    <h4>ShoBiiAdmin</h4>
                </div>

                <div className="div-nav-admin">
                    <nav className="nav-admin">
                        <NavLink to={"/admin/users"}> Användare </NavLink>
                        <NavLink to={"/admin/products"}> Produkter </NavLink>
                    </nav>
                </div>

                <div>
                    <button>Logga ut</button>
                </div>
            </div>
        </>
    );
};

export default HeaderAdmin
