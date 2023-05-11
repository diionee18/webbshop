import logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import "./HeaderAdmin.css"
import { logdin } from "../utils/getAtom";
import { useRecoilState } from "recoil";
import Users from "./Users";


const HeaderAdmin = () => {
    const [isLogdin, setLogdin] = useRecoilState(logdin);
    const logOut = () =>{
        setLogdin(false)
    }
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
                    <button className="logout-button btn" onClick={logOut}><NavLink to={''}>Logga ut</NavLink></button>
                </div>
            </div>
        </>
    );
};

export default HeaderAdmin
