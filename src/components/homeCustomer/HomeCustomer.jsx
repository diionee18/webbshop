import bg from "../../assets/bg.png";
import "./Home.css";
import ShowProducts from "../products/ShowProducts.jsx";
import Sortlist from "../sortList/SortList";
import { useRecoilState } from "recoil";
import { clicked, searchState,isSearched  } from "../utils/getAtom";

const HomeCustomer = () => {
    const [isSearch, setisSearch] = useRecoilState(isSearched)

    return (
        <>

            <Sortlist/>
            { isSearch ? null :

                <div className="bg-div">
                <img src={bg} alt="" className="bg-main" />
                <p className="paragraf-bg">Sommarens heta erbjudande!</p>
            </div>
            }
            <div className="wrapper">
                <ShowProducts />
            </div>
        
    
        </>
    );
};

export default HomeCustomer;