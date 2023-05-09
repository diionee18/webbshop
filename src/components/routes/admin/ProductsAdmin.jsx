import { products} from "../../utils/getAtom";
import { useRecoilState } from "recoil";
import { useEffect} from "react";
import { getProducts } from "../../utils/apiFunctions.js";
import { NavLink } from "react-router-dom";


function ProductsAdmin() {
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
                        <br />
                        {product.id}
                        <br />
                        <button className="update-product-btn"><NavLink to={'/admin/products/edit'}>Uppdatera Produkt</NavLink></button>
                    </li>
                </div>
            ))}
        </div>
    );
}

export default ProductsAdmin;