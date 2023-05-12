import { products, searchState} from "../utils/getAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import "./getproduct.css";
import { getProducts } from "../utils/apiFunctions.js";
import { NavLink } from "react-router-dom";

function SearchedProducts() {
    const [productsState, setProductsState] = useRecoilState(products);
    const [search] = useRecoilState(searchState);
   


      const handleGoToProduct = (product) => {
        setSelectedProducts([product]);
      };

    useEffect(() => {
        async function fetchData() {
            const data = await getProducts();
            if (data) {
                setProductsState(data);
            }
        }

        fetchData();
    }, [setProductsState]);

    return (

        <div className="product-wrapper">
            {productsState
             .filter((product) => product.name.toLowerCase().includes(search))
             .map((product) => (
                <div className="product-div" key={product.id}>
                    <li className="product-li">
                        <div >

                        <div className="img-div">{<img src={product.picture} alt="" />}</div>
                        <div>{product.name}</div>
                        <div>{product.price} Kr</div>
                        </div>
                    </li>
                        <div className="go-to-btn">
                        <NavLink className="nav-btn" to={"/products/" + product.id} onClick={() => handleGoToProduct(product)}  >  Gå till Produkt</NavLink>
                        </div>
                </div>
            ))}
        </div>
    );
}

export default SearchedProducts;