import { products} from "../utils/getAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import "./getproduct.css"
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
        <div className="product-wrapper">
            {productsState.map((product) => (
                <div className="product-div" key={product.id}>
                    <li>
                        {<img src={product.picture} alt="" /> }
                        <br />
                        {product.name }
                        <br />
                        {product.price} Kr
                        <br />
                        {product.description}
                    </li>
                </div>
            ))}
        </div>
    );
}

export default ShowProducts;




