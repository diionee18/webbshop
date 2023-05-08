import bg from "../../assets/bg.png";
import "./Home.css";
import ShowProducts from "../products/ShowProducts.jsx";
import Sortlist from "../sortList/SortList";

const HomeCustomer = () => {

    return (
        <>

            <Sortlist/>
            <div className="bg-div">
                <img src={bg} alt="" className="bg-main" />
                <p className="paragraf-bg">Sommarens heta erbjudande!</p>
            </div>
            <div className="wrapper">
                <ShowProducts />
            </div>
        
    
        </>
    );
};

export default HomeCustomer;