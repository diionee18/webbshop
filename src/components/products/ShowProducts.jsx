import { products } from "../utils/getAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import "./getproduct.css";
import { getProducts } from "../utils/apiFunctions.js";

function ShowProducts() {
    const [productsState, setProductsState] = useRecoilState(products);

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
        <div className="khara">
        <div className="product-wrapper">
            {productsState.map((product) => (
                <div className="product-div" key={product.id}>
                    <li>
                        <div>{<img src={product.picture} alt="" />}</div>
                        <div>{product.name}</div>
                        <div>{product.price} Kr</div>
                        <div className="go-to-btn">
                            <button>Gå till Produkt</button>
                        </div>
                    </li>
                </div>
            ))}
        </div>
        </div>
    );
}

export default ShowProducts;
